from django.conf.urls import url
from .views import CardListView

urlpatterns = [
    url(r'^$', CardListView.as_view(), name='list_view'),

]
