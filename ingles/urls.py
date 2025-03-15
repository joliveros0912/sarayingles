from django.urls import path
from . import views  # Importa tus vistas desde la aplicación

urlpatterns = [
    path('', views.index, name='index'),  # Ruta para la vista 'index'
    path('estaciones/', views.estaciones, name='estaciones'),
    path('casa/', views.casa, name='casa'),
    path('escribirStations/', views.escribirStations, name='escribirStations'),
    path('leerStations/', views.leerStations, name='leerStations'),
    path('escucharStations/', views.escucharStations, name='escucharStations'),
    path('escribircasa/', views.escribircasa, name='escribircasa'),
    path('leercasa/', views.leercasa, name='leercasa'),
    path('escucharcasa/', views.escucharcasa, name='escucharcasa'),

]
