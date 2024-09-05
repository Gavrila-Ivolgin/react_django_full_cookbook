from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=32, unique=True)
    description = models.CharField(max_length=512, blank=True, null=True)
    img = models.ImageField(upload_to='category_img', blank=True, null=True)

    def __str__(self):
        return f'{self.name}'

    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'
        ordering = ['name']


class Recipes(models.Model):
    name = models.CharField(max_length=64, unique=True)
    description = models.TextField(null=True, blank=True)
    img = models.ImageField(upload_to='recipes_img', blank=True, null=True)
    id_category = models.ForeignKey(to=Category, on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Рецепт'
        verbose_name_plural = 'Рецепты'
        ordering = ['name']

    def __str__(self):
        return f'Рецепт: {self.name}'
