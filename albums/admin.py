from django.contrib import admin
from albums.models import Albums, Audio, AlbumsAdmin
# Register your models here.
admin.site.register(Albums, AlbumsAdmin)
admin.site.register(Audio)
