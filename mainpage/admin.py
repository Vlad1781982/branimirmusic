# -*- coding: utf-8 -*-
from django.contrib import admin
from mainpage.models import Gallery, Image,GalleryAdmin, ImageAdmin, Video

admin.site.register(Gallery, GalleryAdmin)
admin.site.register(Image, ImageAdmin)
admin.site.register(Video)