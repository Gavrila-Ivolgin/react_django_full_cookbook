#!/usr/bin/env python
# -*- coding: utf-8 -*-
from django.contrib import admin
from django.urls import path, include
# from cookbook.views import RecipesListViews
from rest_framework.routers import DefaultRouter
from .views import RecipesViewSet


router = DefaultRouter()
router.register(r'recipes', RecipesViewSet)

app_name = 'cookbook'

urlpatterns = [
    # path('recipes/', RecipesListViews.as_view(), name='recipes'),
    path('', include(router.urls)),
]
