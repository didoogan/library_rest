from rest_framework.renderers import JSONRenderer

from books.models import Book
from books.serializer import BookSerializer
from rest_framework import viewsets


class BookViewSet(viewsets.ModelViewSet):
    renderer_classes = (JSONRenderer,)
    queryset = Book.objects.all()
    serializer_class = BookSerializer

    def perform_create(self, serializer):
        authors = self.request.data.get('author', None)
        serializer.save(authors=authors)

    def perform_update(self, serializer):
        authors = self.request.data.get('author', None)
        serializer.save(authors=authors)
