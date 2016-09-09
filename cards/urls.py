from django.conf.urls import url
from .views import CardListView, CardCreateView
from books.views import IsNotTakenBooks

urlpatterns = [
    url(r'^$', CardListView.as_view(), name='list_view'),
    url(r'^isnottakenbooks/$', IsNotTakenBooks.as_view(), name='detail_view'),
    url(r'^create/$', CardCreateView.as_view(), name='detail_view'),
]
