from django.conf.urls import url, include
from authors import views
from rest_framework.routers import SimpleRouter


router = SimpleRouter()
router.register(r'^/', views.AuthorViewSet)

# API endpoints
urlpatterns = [
    url(r'^', include(router.urls)),
]


# from authors.views import AuthorViewSet
# from rest_framework import renderers
# from rest_framework.urlpatterns import format_suffix_patterns
#
#
# author_list = AuthorViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })
#
# author_detail = AuthorViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'patch': 'partial_update',
#     'delete': 'destroy'
# })
#
#
# urlpatterns = format_suffix_patterns([
#     url(r'^$', author_list, name='author-list'),
#     url(r'^(?P<pk>[0-9]+)/$', author_detail, name='author-detail'),
# ])
#
