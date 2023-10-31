from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(FormData)
class FormDataAdmin(admin.ModelAdmin):
    readonly_fields = ['date', 'time']
    fields = ['name', 'email', 'subject', 'message', 'date', 'time']
    list_display = ['name', 'email', 'subject']
