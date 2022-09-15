from django.contrib import admin
from .models import Todo, Author

admin.register(Todo, Author)
