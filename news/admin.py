# -*- coding: utf-8 -*-
from django.contrib import admin
from news.models import News, NewsAdmin

admin.site.register(News, NewsAdmin)
