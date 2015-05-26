# -*- coding: utf-8 -*-
from django.db import models
from imagekit.models import ImageSpecField, ProcessedImageField
from image_cropping import ImageRatioField
from imagekit.processors import ResizeToFill
from djangular.views.crud import NgCRUDView
from django.contrib import admin
from sorl.thumbnail import ImageField
from image_cropping import ImageCroppingMixin
from slugify import Slugify, UniqueSlugify, slugify
from slugify import slugify_url
from slugify import slugify_ru
from easy_thumbnails.fields import ThumbnailerImageField
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
    file = models.ImageField('Фото',upload_to='images/')
    file_thumbnail = ImageSpecField(source='file',
                                      processors=[ResizeToFill(100, 100)],
                                      format='JPEG',
                                      options={'quality': 60})
    gallery = models.ForeignKey('Gallery', related_name='images', blank=True, null=True)

    def __unicode__(self):
        return u'%s' %self.filename

    class Meta:
        verbose_name= 'Фото'
        verbose_name_plural = 'Фото'

    @property
    def filename(self):
        return self.file.name.rsplit('/', 1)[-1]

class ImgCrudView(NgCRUDView):
    model=Image

class MyModelAdmin(ImageCroppingMixin, admin.ModelAdmin):
    pass

class GalleryAdmin(admin.ModelAdmin):
    exclude = ('slug',)
