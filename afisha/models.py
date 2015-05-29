# -*- coding: utf-8 -*-
from django.db import models
from djangular.views.crud import NgCRUDView
from ckeditor.fields import RichTextField


# Create your models here.

class Afisha(models.Model):
    title=models.CharField('Выступление', max_length=200)
    slug = models.SlugField(unique=True,primary_key=True)
    content=RichTextField('Описание')

    def __unicode__(self):
        return u'%s' %self.title
    class Meta:
        verbose_name= 'Афиша'
        verbose_name_plural = 'Афиша'

class AfishaCRUDView(NgCRUDView):
    model = Afisha