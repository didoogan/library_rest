from django.conf.urls import url, include
from authors import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'', views.AuthorViewSet)

# API endpoints
urlpatterns = [
    url(r'^', include(router.urls)),
]
