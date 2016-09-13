from django.conf.urls import url
from .views import UserListView, signup, signin, UsersProfileCardsListView, ProfileChangeUser


urlpatterns = [
    url(r'^$', UserListView.as_view(), name='list_view'),
    url(r'^signup/$', signup, name='signup'),
    url(r'^signin/$', signin, name='signin'),
    url(r'^profile/$', UsersProfileCardsListView.as_view(), name='profile_list'),
    url(r'^profile/change/$', ProfileChangeUser.as_view(), name='profile_update'),
]
