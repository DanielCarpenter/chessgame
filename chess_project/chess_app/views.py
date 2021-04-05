from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'chess_app/home.html', {'title':'home'})

def lobby(request, lobby_name):
    return render(request, 'chess_app/lobby.html', {'lobby_name': lobby_name})