from django.urls import path
from . import views  # Importa tus vistas desde la aplicación

urlpatterns = [
    path('', views.index, name='index'),  # Ruta para la vista 'index'
    path('estaciones/', views.estaciones, name='estaciones'),
    path('casa/', views.casa, name='casa'),
    path('formas/', views.formas, name='formas'),
    path('colores/', views.colores, name='colores'),
    path('escribirStations/', views.escribirStations, name='escribirStations'),
    path('leerStations/', views.leerStations, name='leerStations'),
    path('escucharStations/', views.escucharStations, name='escucharStations'),
    path('escribircasa/', views.escribircasa, name='escribircasa'),
    path('leercasa/', views.leercasa, name='leercasa'),
    path('escucharcasa/', views.escucharcasa, name='escucharcasa'),
    path('leerformas/', views.leerformas, name='leerformas'),
    path('escribirShapes/', views.escribirShapes, name='escribirShapes'),
    path('escucharformas/', views.escucharformas, name='escucharformas'),
    path('escribircolors/', views.escribircolors, name='escribircolors'),
    path('leercolors/', views.leercolors, name='leercolors'),
    path('escucharcolors/', views.escucharcolors, name='escucharcolors'),
    path('famili/', views.famili, name='famili'),
    path('escribirfamili/', views.escribirfamili, name='escribirfamili'),
    path('leerfamili/', views.leerfamili, name='leerfamili'),
    path('escucharfamili/', views.escucharfamili, name='escucharfamili'),
    path('animals/', views.animals, name='animals'),
    path('escribiranumals/', views.escribiranumals, name='escribiranumals'),
    path('leeranimals/', views.leeranimals, name='leeranimals'),
    path('escucharanimals/', views.escucharanimals, name='escucharanimals'),


]
