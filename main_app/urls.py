from django.conf.urls import url, include
from django.contrib import admin
from authors.views import AuthorViewSet
from books.views import BookViewSet
from rest_framework.routers import SimpleRouter, DefaultRouter


router = DefaultRouter()
router.register(r'authors', AuthorViewSet)
router.register(r'books', BookViewSet)


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'', include(router.urls)),
    url(r'^books', include('books.urls')),
]

