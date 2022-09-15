import graphene
from .mutations import CreateTodo, CreateAuthor
from .resolvers import TodoResolvers
from .types import TodoType, AuthorType

class TodoQueries(graphene.ObjectType, TodoResolvers):
    todos = graphene.List(TodoType)
    authors = graphene.List(AuthorType)


class TodoMutations(graphene.ObjectType):
    create_todo = CreateTodo.Field()
    create_author = CreateAuthor.Field()
