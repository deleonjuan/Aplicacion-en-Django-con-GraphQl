from django.db import models

#centro comercial donde estan los productos
class Comercial(models.Model):
    comercial_name = models.CharField(max_length=100)

    def __str__(self):
        return self.comercial_name


#Categoria titulo_nombre
class Title(models.Model):
    title_name = models.CharField(max_length=100)

    def __str__(self):
        return self.title_name


class Productos(models.Model):
    productos_name = models.CharField(max_length=255)
    productos_comercial = models.ForeignKey(Comercial, related_name='productos_comercial', on_delete=models.CASCADE)
    productos_title = models.ForeignKey(Title, related_name='productos_title', on_delete=models.CASCADE)  
    
    def __str__(self):
       return self.productos_name
