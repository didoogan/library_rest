from django.conf.urls import url
from .views import UserListView, signup, signin


urlpatterns = [
    url(r'^$', UserListView.as_view(), name='list_view'),
    url(r'^signup/$', signup, name='signup'),
    url(r'^signin/$', signin, name='signup'),
    url(r'^signup/$', signup, name='signup'),
]
