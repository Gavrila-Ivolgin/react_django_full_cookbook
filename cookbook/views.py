from django.shortcuts import render
from django.views.generic.list import ListView
from rest_framework import viewsets
from .models import Recipes
from .serializers import RecipesSerializer


# class RecipesListViews(ListView):
#     pass


class RecipesViewSet(viewsets.ModelViewSet):
    queryset = Recipes.objects.all()
    serializer_class = RecipesSerializer
