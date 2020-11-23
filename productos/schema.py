import graphene
from graphene_django import DjangoObjectType
from .models import *
from graphene_django.filter import DjangoFilterConnectionField
from graphql_relay.node.node import from_global_id #needed for updating

class ComercialNode(DjangoObjectType):
    class Meta:
        model = Comercial
        filter_fields = ['comercial_name']
        interfaces = (graphene.relay.Node,)


class TitleNode(DjangoObjectType):
    class Meta:
        model = Title
        filter_fields = ['title_name']
        interfaces = (graphene.relay.Node,)


class ProductosNode(DjangoObjectType):
    class Meta:
        model = Productos
        filter_fields = [
              'productos_name',
              'productos_comercial__comercial_name',
              'productos_title__title_name'
               ]
        interfaces = (graphene.relay.Node,)


class CreateTitle(graphene.relay.ClientIDMutation):
    title = graphene.Field(TitleNode)
    class Input:
        title_name = graphene.String()
    def mutate_and_get_payload(root, info, **input):
        title = Title(
            title_name=input.get('title_name')
        )
        title.save()
        return CreateTitle(title=title)

class CreateProductos(graphene.relay.ClientIDMutation):
    productos = graphene.Field(ProductosNode)

    class Input:
        productos_name = graphene.String()
        productos_comercial = graphene.String()
        productos_title = graphene.String()

    def mutate_and_get_payload(root, info, **input):

        productos = Productos(
            productos_name=input.get('productos_name'),
            productos_comercial=Comercial.objects.get(comercial_name=input.get('productos_comercial')),
            productos_title=Title.objects.get(title_name=input.get('productos_title'))
        )
        productos.save()

        return CreateProductos(productos=productos)


class UpdateProductos(graphene.relay.ClientIDMutation):
    productos = graphene.Field(ProductosNode)
    class Input:
        id = graphene.String()
        productos_name = graphene.String()
        productos_comercial = graphene.String()
        productos_title = graphene.String()
    def mutate_and_get_payload(root, info, **input):
        productos = Productos.objects.get(pk=from_global_id(input.get('id'))[1])
        productos.productos_name = input.get('productos_name')
        productos.productos_comercial = Comercial.objects.get(comercial_name=input.get('productos_comercial'))
        productos.productos_title = Title.objects.get(title_name=input.get('productos_title'))
        productos.save()
        return UpdateProductos(productos=productos)


class DeleteProductos(graphene.relay.ClientIDMutation):
    productos = graphene.Field(ProductosNode)
    class Input:
        id = graphene.String()
    def mutate_and_get_payload(root, info, **input):
        productos = Productos.objects.get(pk=from_global_id(input.get('id'))[1])
        productos.delete()
        return DeleteProductos(productos=productos)


class Query(object):
    comercial = graphene.relay.Node.Field(ComercialNode)
    all_comercials = DjangoFilterConnectionField(ComercialNode)

    title = graphene.relay.Node.Field(TitleNode)
    all_titles = DjangoFilterConnectionField(TitleNode)

    productos = graphene.relay.Node.Field(ProductosNode)
    all_productoss = DjangoFilterConnectionField(ProductosNode)

class Mutation(graphene.AbstractType):
    create_title = CreateTitle.Field()
    create_productos = CreateProductos.Field()
    update_productos = UpdateProductos.Field()
    delete_productos = DeleteProductos.Field()




