from django.conf.urls.static import static
from django.urls import path, re_path
from django.conf import settings
from .views import *


urlpatterns = [
    path('', landingView, name="landing page"),
    path('hp', harryPotterView, name="marauder's map"),
    re_path(r'^contactFormRRB', contactFormRRB, name="get in touch")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
