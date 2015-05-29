from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf import settings
from django.conf.urls import patterns, include, url
from mainpage.models import MyCRUDView,ImgCrudView
from news.models import NewsCRUDView
from afisha.models import AfishaCRUDView
from albums.models import AlbumsCRUDView, AudioCrudView
from django.views.generic import TemplateView
from django.contrib import admin
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'branimir.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'mainpage.views.index'),
    url(r'^partials/main.html$','mainpage.views.main'),
    url(r'^views/afisha.html$','mainpage.views.afisha'),
    url(r'^views/news.html$','mainpage.views.news'),
    url(r'^views/vk.html$','mainpage.views.vk'),
    url(r'^partials/foto-video.html$','mainpage.views.fotovideo'),
    url(r'^partials/bio.html$','mainpage.views.bio'),
    url(r'^partials/disco.html$','mainpage.views.disco'),
    url(r'^partials/disco_detail.html$','mainpage.views.discodetail'),
    url(r'^partials/fvdetails.html$','mainpage.views.fvdetails'),
    url(r'^admin_tools/', include('admin_tools.urls')),
    url(r'^crud/gallery/?$', MyCRUDView.as_view(), name='my_gallery_view'),
    url(r'^crud/image/?$', ImgCrudView.as_view(), name='my_image_view'),
    url(r'^crud/news/?$', NewsCRUDView.as_view(), name='my_news_view'),
    url(r'^crud/afisha/?$', AfishaCRUDView.as_view(), name='my_afisha_view'),
    url(r'^crud/albums/?$', AlbumsCRUDView.as_view(), name='my_albums_view'),
    url(r'^crud/audio/?$', AudioCrudView.as_view(), name='my_audio_view'),
    url(r'^ckeditor/', include('ckeditor.urls')),
)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += staticfiles_urlpatterns()