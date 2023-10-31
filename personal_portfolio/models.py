from django.db import models
from django.utils import timezone
import pytz


# Create your models here.
class FormData(models.Model):

    name = models.CharField(max_length=50, blank=False, null=False, default="Someone")
    email = models.CharField(max_length=50, blank=False, null=False, default="xyz@abc.com")
    subject = models.CharField(max_length=100, blank=True, default='')
    message = models.TextField(max_length=2500, blank=False, null=False, default="Something")
    date = models.DateField()
    time = models.TimeField()
    objects = models.Manager()

    def save(self, *args, **kwargs):
        # Set the default values for Date and Time fields to the current date and time in IST
        ist_timezone = pytz.timezone('Asia/Kolkata')
        current_datetime = timezone.now().astimezone(ist_timezone)
        self.date = current_datetime.date()
        self.time = current_datetime.time()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
