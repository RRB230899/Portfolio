from django.urls import path, re_path
from .views import *


urlpatterns = [
    path('', landingView, name="landing page"),
    path('hp', harryPotterView, name="marauder's map"),
    re_path(r'^contactFormRRB', contactFormRRB, name="get in touch")
]