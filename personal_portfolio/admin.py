from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(FormData)
class ContactForm(admin.ModelAdmin):
    fields = ['name', 'email', 'subject', 'message']
    list_display = ['name', 'email', 'subject']
