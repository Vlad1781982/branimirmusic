# -*- coding: utf-8 -*-
from django.contrib import admin
from mainpage.models import Gallery, Image,MyModelAdmin,GalleryAdmin

admin.site.register(Gallery, GalleryAdmin)
admin.site.register(Image, MyModelAdmin)