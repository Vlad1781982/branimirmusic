# -*- coding: utf-8 -*-
from tastypie.resources import ModelResource
from mainpage.models import Gallery, Image
from tastypie import fields

class GalleryResource(ModelResource):
    class Meta:
        queryset = Gallery.objects.all()
        resource_name = 'gallery'

class ImageResource(ModelResource):
    gallery=fields.ForeignKey(GalleryResource, 'gallery', null=True, blank=True)
    class Meta:
        queryset = Image.objects.all()
        resource_name = 'image'