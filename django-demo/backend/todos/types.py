from graphene_django import DjangoObjectType
from .models import Todo, Author


class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = ("id", "text", "author")


class AuthorType(DjangoObjectType):
    class Meta:
        model = Author
        fields = ("id", "name", "todos")
