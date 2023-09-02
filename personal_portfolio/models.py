from django.db import models


# Create your models here.
class FormData(models.Model):

    name = models.CharField(max_length=50, blank=False, null=False, default="Someone")
    email = models.CharField(max_length=50, blank=False, null=False, default="xyz@abc.com")
    subject = models.CharField(max_length=100, blank=True, default='')
    message = models.TextField(max_length=2500, blank=False, null=False, default="Something")
    objects = models.Manager()
