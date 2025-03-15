from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return render(request, 'index.html')

def estaciones(request):
    return render(request, 'estaciones.html')

def casa(request):
    return render(request, 'casa.html')

#estaciones actividades 
#escribir
def escribirStations(request):
    if request.method == "POST":
        respuestas_usuario = [
            request.POST.get("season1"),
            request.POST.get("season2"),
            request.POST.get("season3"),
            request.POST.get("season4"),
            request.POST.get("season5"),
            request.POST.get("word1"),
            request.POST.get("word2"),
            request.POST.get("season6"),
            request.POST.get("word3"),
            request.POST.get("word4"),
            request.POST.get("season7"),
            request.POST.get("word5"),
            request.POST.get("season8"),
            request.POST.get("word6"),
            request.POST.get("word7")
        ]
        
        respuestas_correctas = [
            "spring", "summer", "autumn", "winter",
            "spring", "flowers", "birds", "summer",
            "sun","beach",  "autumn", "ice cream",
             "winter","cool", "snows"
        ]

        # Comparar respuestas y definir colores
        resultados = [respuestas_usuario[i] == respuestas_correctas[i] for i in range(len(respuestas_correctas))]

        return render(request, "escribirStations.html", {"resultados": resultados})

    return render(request, "escribirStations.html")

#leer
from django.shortcuts import render

def leerStations(request):
    if request.method == "POST":
        respuestas_usuario = [
            request.POST.get("q1"),
            request.POST.get("q2"),
            request.POST.get("q3"),
            request.POST.get("q4"),
            request.POST.get("q5")
        ]
        
        respuestas_correctas = ["False", "True", "True", "False", "True"]

        # Comparar respuestas
        resultados = [respuestas_usuario[i] == respuestas_correctas[i] for i in range(len(respuestas_correctas))]

        return render(request, "leerStations.html", {"resultados": resultados})

    return render(request, "leerStations.html")

#escuchar
#escucharStations.html
def escucharStations(request):
    return render(request, 'escucharStations.html')

#casa
def escribircasa(request):
    return render(request, 'escribirCasa.html')

def leercasa(request):
    return render(request, 'leerCasa.html')

def escucharcasa(request):
    return render(request, 'escucharCasa.html')