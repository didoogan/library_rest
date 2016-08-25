from django.conf.urls import url, include
from django.contrib import admin

from rest_framework.routers import DefaultRouter

from authors import views


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^authors', include('authors.urls')),
    url(r'^books', include('books.urls')),
]
