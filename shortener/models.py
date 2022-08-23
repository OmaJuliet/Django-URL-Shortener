from django.db import models

# Create your models here.
# To create a django model that's going yo save a url anytimes one is inputted and then shorten it
class Url(models.Model):
    link = models.CharField(max_length=10000)
    uuid = models.CharField(max_length=10)