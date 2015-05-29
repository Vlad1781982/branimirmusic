# -*- coding: utf-8 -*-
from django.db import models
from djangular.views.crud import NgCRUDView
from ckeditor.fields import RichTextField
from slugify import slugify_url
from django.contrib import admin


# Create your models here.

class Afisha(models.Model):
    title=models.CharField('Выступление', max_length=80)
    slug = models.SlugField(unique=True,primary_key=True)
    content=RichTextField('Описание')
    created=models.DateTimeField('Создано', auto_now=True)

    def __unicode__(self):
        return u'%s' %self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify_url(self.title, max_length=40)
        return super(Afisha, self).save(*args, **kwargs)

    class Meta:
        verbose_name= 'Афиша'
        verbose_name_plural = 'Афиша'

class AfishaCRUDView(NgCRUDView):
    model = Afisha

class AfishaAdmin(admin.ModelAdmin):
    exclude = ('slug','created')