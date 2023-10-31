from django.db import models
from django.utils import timezone


# Create your models here.
class FormData(models.Model):

    name = models.CharField(max_length=50, blank=False, null=False, default="Someone")
    email = models.CharField(max_length=50, blank=False, null=False, default="xyz@abc.com")
    subject = models.CharField(max_length=100, blank=True, default='')
    message = models.TextField(max_length=2500, blank=False, null=False, default="Something")
    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)
    objects = models.Manager()

    def save(self, *args, **kwargs):
        # Set the default values for Date and Time fields to the current date and time in IST
        ist_timezone = timezone.get_fixed_timezone(330)  # 330 minutes is the offset for IST
        current_datetime = timezone.now()
        ist_time = current_datetime.astimezone(ist_timezone)
        self.date = ist_time.date()
        self.time = ist_time.time()
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name
