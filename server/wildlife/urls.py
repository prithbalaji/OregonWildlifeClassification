from django.urls import path

from . import views

urlpatterns = [
    path('testtesttest', views.index, name='index'),
]
