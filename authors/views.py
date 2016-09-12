from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated


from authors.models import Author
from books.models import Book
from authors.serializer import AuthorSerializer


class AuthorViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        super(AuthorViewSet, self).perform_create(serializer)
        author = serializer.instance
        need_book = self.request.data.get('needBook', False)
        if need_book:
            title = self.request.data.get('bookTitle')
            book = Book.objects.create(title=title)
            book.author.add(author)


