from django.shortcuts import render
from django.http import JsonResponse
from .models import *


# Create your views here.
def harryPotterView(request):
    return render(request, 'hp.html', {})


def contactFormRRB(request):
    msg = {
        'response': 'Something went wrong.',
        'code': 201
    }
    if request.method == 'POST':
        try:
            formData = dict(request.POST)
            FormData.objects.create(name=formData['contactName'][0],
                                    email=formData['contactEmail'][0],
                                    subject=formData['contactSubject'][0],
                                    message=formData['contactMessage'][0])
            msg = {
                'response': 'Form submitted successfully.',
                'code': 200
            }
            print(formData)
        except Exception as e:
            msg = {
                'response': f'Something went wrong. Error: {e}',
                'code': 400
            }
            print('Something went wrong with the form submission. Please try again!', e)

    return JsonResponse(msg)
