from rest_framework.renderers import JSONRenderer

from books.models import Book
from books.serializer import BookSerializer
from rest_framework import viewsets


class BookViewSet(viewsets.ModelViewSet):
    renderer_classes = (JSONRenderer,)
    queryset = Book.objects.all()
    serializer_class = BookSerializer
