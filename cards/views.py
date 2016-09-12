import datetime

from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from cards.models import Card
from books.models import Book
from cards.serializer import CardSerializer


class CardListView(generics.ListAPIView):
    # queryset = Card.objects.all()
    serializer_class = CardSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        user = self.request.user
        # cards = Card.objects.all()
        cards = Card.objects.filter(myuser__user=user)
        return cards


class CardCreateView(generics.CreateAPIView):
    serializer_class = CardSerializer
    permission_classes = (IsAuthenticated, )

    def perform_create(self, serializer):
        books = self.request.data.get('books', False)
        if books:
            now = datetime.datetime.now()
            user = self.request.user
            myuser = user.myuser
            for index in books:
                book = Book.objects.get(id=index)
                book.is_taken = True
                book.save()
                Card.objects.create(books=book, when_giving=now, myuser=myuser)


class CardUpdateView(generics.UpdateAPIView, generics.ListAPIView):
    serializer_class = CardSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        user = self.request.user
        myuser = user.myuser
        cards = Card.objects.filter(myuser=myuser, when_return=False)
        return cards

    def perform_update(self, serializer):
        books = self.request.data.get('books', False)
        if books:
            now = datetime.datetime.now()
            user = self.request.user
            myuser = user.myuser
            for index in books:
                book = Book.objects.get(id=index)
                book.is_taken = False
                book.save()
                card = Card.objects.get(books=book, myuser=myuser, when_return__isnull=True)
                card.when_return = now
                card.save()
