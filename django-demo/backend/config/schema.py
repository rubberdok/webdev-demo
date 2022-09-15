import graphene
from todos.schema import TodoQueries, TodoMutations

class Queries(TodoQueries):
    pass


class Mutations(TodoMutations):
    pass


schema = graphene.Schema(query=Queries, mutation=Mutations)
