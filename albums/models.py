# -*- coding: utf-8 -*-
from django.db import models
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill
from djangular.views.crud import NgCRUDView
from imagekit.models import ProcessedImageField
from sorl.thumbnail import ImageField
# Create your models here.

class Albums(models.Model):
    title = models.CharField('Название альбома', max_length=200)
    created = models.DateTimeField(verbose_name='Создано',auto_now=True)
    datev=models.DateField(verbose_name='Год выпуска',null=True, blank=True)
    slug = models.SlugField(unique=True,primary_key=True)
    photo=ProcessedImageField(verbose_name='Обложка',upload_to='media/',
                                           processors=[ResizeToFill(200, 200)],
                                           format='JPEG',
                                           options={'quality': 80}, null=True, blank=True)
    photo_thumb=ProcessedImageField(verbose_name='Миниатюра обложки',upload_to='media/',
                                           processors=[ResizeToFill(50, 50)],
                                           format='JPEG',
                                           options={'quality': 80}, null=True, blank=True)

    def __unicode__(self):
        return u'%s' %self.title
    class Meta:
        verbose_name= 'Альбом'
        verbose_name_plural = 'Альбомы'

class AlbumsCRUDView(NgCRUDView):
    model = Albums


class Audio(models.Model):
    file = models.FileField('Трек',upload_to='audio/')
    albums = models.ForeignKey('Albums', blank=True, null=True)

    def __unicode__(self):
        return u'%s' %self.filename

    class Meta:
        verbose_name= 'Трек'
        verbose_name_plural = 'Треки'

    @property
    def filename(self):
        return self.file.name.rsplit('/', 1)[-1]

class AudioCrudView(NgCRUDView):
    model=Audio