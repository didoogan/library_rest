from django.conf.urls import url
from .views import CardListView, CardCreateView, CardUpdateView
from books.views import IsNotTakenBooks

urlpatterns = [
    url(r'^$', CardListView.as_view(), name='list_view'),
    url(r'^isnottakenbooks/$', IsNotTakenBooks.as_view(), name='detail_view'),
    url(r'^create/$', CardCreateView.as_view(), name='detail_view'),
    url(r'^update/$', CardUpdateView.as_view(), name='update_view'),
]
