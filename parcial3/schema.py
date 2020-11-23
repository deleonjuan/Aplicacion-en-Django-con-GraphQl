import graphene
import productos.schema

class Query(productos.schema.Query, graphene.ObjectType):
    pass

class Mutation(productos.schema.Mutation, graphene.ObjectType):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)