import graphene

from .models import Todo, Author
from .types import TodoType, AuthorType

class CreateTodoInput(graphene.InputObjectType):
    text = graphene.String(required=True)
    author_id = graphene.ID(required=True)

class CreateTodo(graphene.Mutation):
    ok = graphene.Boolean()
    todo = graphene.Field(TodoType)

    class Arguments:
        todo_data = CreateTodoInput(required=True)

    def mutate(self, info, todo_data):
        try:
            author = Author.objects.get(id=todo_data.get("author_id"))
        except Author.DoesNotExist:
            raise ValueError("Author not found")

        todo = Todo()
        for key, value in todo_data.items():
            setattr(todo, key, value)
        todo.save()

        return CreateTodo(todo=todo, ok=True)

class CreateAuthorInput(graphene.InputObjectType):
    name = graphene.String(required=True)

class CreateAuthor(graphene.Mutation):
    ok = graphene.Boolean()
    author = graphene.Field(AuthorType)

    class Arguments:
        author_data = CreateAuthorInput(required=True)

    def mutate(self, info, author_data):
        author = Author()
        for key, value in author_data.items():
            setattr(author, key, value)
        author.save()

        return CreateAuthor(author=author, ok=True)
