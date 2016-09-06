from django.conf.urls import url, include
from django.contrib import admin
from django.views.generic import TemplateView

from rest_framework.routers import SimpleRouter, DefaultRouter
from rest_framework.authtoken import views

from authors.views import AuthorViewSet
from books.views import BookViewSet



router = SimpleRouter()
router.register(r'authors', AuthorViewSet)
router.register(r'books', BookViewSet)


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'', include(router.urls)),
    url(r'^$', TemplateView.as_view(template_name="base.html")),
    url(r'^users/', include('users.urls')),
]

urlpatterns += [
    url(r'^api-token-auth/', views.obtain_auth_token)
]

