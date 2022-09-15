from .models import Todo, Author


class TodoResolvers:
    def resolve_todos(self, info):
        return Todo.objects.prefetch_related("author").all()

    def resolve_authors(self, info):
        return Author.objects.prefetch_related("todos").all()
