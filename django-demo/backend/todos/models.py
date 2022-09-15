from django.db import models

class Todo(models.Model):
    text = models.TextField()
    author = models.ForeignKey("Author", related_name="todos", on_delete=models.CASCADE)

    def __str__(self):
        return self.text

class Author(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
