# -*- coding: utf-8 -*-
from django.shortcuts import render
from news.models import News
from albums.models import Albums
from mainpage.models import Image, Gallery
from django.views.generic import TemplateView
from django.http import HttpResponse
from django.template import RequestContext, loader
from django.utils import timezone
from datetime import datetime, date, time
#from django.template.defaultfilters import slugify
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.views.decorators.csrf import ensure_csrf_cookie


# Create your views here.
def index(request):
    return render(request, 'mainpage/index.html')
# Create your views here.

def main(request):
    news=News.objects.all()
    return render(request,'mainpage/partials/main.html', {'news':news})

def fotovideo(request):
    galleries=Gallery.objects.all()
    return render(request,'mainpage/partials/foto-video.html',{'gallery':galleries})

def bio(request):
    return render(request,'mainpage/partials/bio.html')

def disco(request):
    albums=Albums.objects.all()
    return render(request,'mainpage/partials/disco.html', {'albums':albums})

def fvdetails(request):
    return render(request,'mainpage/partials/fvdetails.html')

def afisha(request):
    return render(request,'mainpage/views/afisha.html')

def news(request):
    return render(request,'mainpage/views/news.html')

def vk(request):
    return render(request,'mainpage/views/vk.html')
def discodetail(request):
    return render(request, 'mainpage/partials/disco_detail.html')

def foto(request):
    return render(request, 'mainpage/partials/foto.html')

def video(request):
    return render(request, 'mainpage/partials/video.html')