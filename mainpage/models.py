# -*- coding: utf-8 -*-
from django.db import models
from djangular.views.crud import NgCRUDView
from django.contrib import admin
from slugify import slugify_url
from django_thumbs.db.models import ImageWithThumbsField
# Create your models here.

class Gallery(models.Model):
    title = models.CharField('Название', max_length=200)
    created = models.DateTimeField(verbose_name='Создано',auto_now=True)
    slug = models.SlugField(unique=True,primary_key=True)
    date=models.DateTimeField(verbose_name='Дата',blank=True, null=True)

    def __unicode__(self):
        return u'%s' %self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify_url(self.title, max_length=40)
        return super(Gallery, self).save(*args, **kwargs)
    class Meta:
        verbose_name= 'Фотоколлекция'
        verbose_name_plural = 'Фотоколлекции'

class MyCRUDView(NgCRUDView):
    model = Gallery


class Image(models.Model):
    image = models.ImageField('Фото',upload_to='images/')
    gallery = models.ForeignKey('Gallery', related_name='images', blank=True, null=True)
    thumbnail = models.ImageField(
        upload_to='images/',
        max_length=500,
        null=True,
        blank=True
    )
    def create_thumbnail(self):
        # original code for this method came from
        # http://snipt.net/danfreak/generate-thumbnails-in-django-with-pil/

        # If there is no image associated with this.
        # do not create thumbnail
        if not self.image:
            return
        from PIL import Image
        from cStringIO import StringIO
        from django.core.files.uploadedfile import SimpleUploadedFile
        import os

        # Set our max thumbnail size in a tuple (max width, max height)
        THUMBNAIL_SIZE = (200, 200)

        DJANGO_TYPE = self.image.file.content_type

        if DJANGO_TYPE == 'image/jpeg':
            PIL_TYPE = 'jpeg'
            FILE_EXTENSION = 'jpg'
        elif DJANGO_TYPE == 'image/png':
            PIL_TYPE = 'png'
            FILE_EXTENSION = 'png'

        # Open original photo which we want to thumbnail using PIL's Image
        image = Image.open(StringIO(self.image.read()))

        # We use our PIL Image object to create the thumbnail, which already
        # has a thumbnail() convenience method that contrains proportions.
        # Additionally, we use Image.ANTIALIAS to make the image look better.
        # Without antialiasing the image pattern artifacts may result.
        image.thumbnail(THUMBNAIL_SIZE, Image.ANTIALIAS)

        # Save the thumbnail
        temp_handle = StringIO()
        image.save(temp_handle, PIL_TYPE)
        temp_handle.seek(0)

        # Save image to a SimpleUploadedFile which can be saved into
        # ImageField
        suf = SimpleUploadedFile(os.path.split(self.image.name)[-1],
                temp_handle.read(), content_type=DJANGO_TYPE)
        # Save SimpleUploadedFile into image field
        self.thumbnail.save(
            '%s_thumbnail.%s' % (os.path.splitext(suf.name)[0], FILE_EXTENSION),
            suf,
            save=False
        )

    def save(self, *args, **kwargs):

        self.create_thumbnail()

        force_update = False

        # If the instance already has been saved, it has an id and we set
        # force_update to True
        if self.id:
            force_update = True

        # Force an UPDATE SQL query if we're editing the image to avoid integrity exception
        super(Image, self).save(force_update=force_update)

    def __unicode__(self):
        return u'%s' %self.image

    class Meta:
        verbose_name= 'Фото'
        verbose_name_plural = 'Фото'


class ImgCrudView(NgCRUDView):
    model=Image

class GalleryAdmin(admin.ModelAdmin):
    exclude = ('slug',)
