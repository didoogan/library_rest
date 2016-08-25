from django.conf.urls import url, include
from books import views
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'^', views.BookViewSet)

# API endpoints
urlpatterns = [
    url(r'^', include(router.urls)),
]
