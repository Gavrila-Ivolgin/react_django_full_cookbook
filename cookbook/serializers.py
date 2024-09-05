from rest_framework import fields, serializers

from cookbook.models import Category, Recipes


class RecipesSerializer(serializers.ModelSerializer):
    id_category = serializers.SlugRelatedField(
        slug_field='name',
        queryset=Category.objects.all()
    )

    class Meta:
        model = Recipes
        fields = ('id', 'name', 'description', 'img', 'id_category')



