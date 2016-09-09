from rest_framework.renderers import JSONRenderer
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from books.models import Book
from books.serializer import BookSerializer


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


class IsNotTakenBooks(generics.ListAPIView):
    serializer_class = BookSerializer
    queryset = Book.objects.filter(is_taken=False)
    permission_classes = (IsAuthenticated, )


