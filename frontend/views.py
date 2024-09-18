from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'index.html')

def api_documentation(request):
    return render(request, 'api_documentation.html')
  
  
def bet_converter(request):
    return render(request, 'bet_converter.html')
  
def bet_editor(request):
    return render(request, 'bet_editor.html')
  
  
def bet_viewer(request):
    return render(request, 'bet_viewer.html')

def free_codes(request):
    return render(request, 'free_codes.html')

def hot_predictions(request):
    return render(request, 'hot_predictions.html')
  
def pricing(request):
    return render(request, 'pricing.html')
  
def contact_us(request):
    return render(request, 'contact.html')
  
def privacy(request):
    return render(request, 'privacy.html')
  
def terms(request):
    return render(request, 'terms.html')
  
  
  # Authentication 
def login(request):
    return render(request, 'auth/login.html')
  
def register(request):
    return render(request, 'auth/register.html')
  
def forget_password(request):
    return render(request, 'auth/forget_password.html')
  
def reset_password(request):
    return render(request, 'auth/reset_password.html')




# Dashboard 
def dashboard(request):
    return render(request, 'dashboard/index.html')


#Admin
def adminIndex(request):
  return render(request, 'admin/index.html')

def users(request):
  return render(request, 'admin/users.html')


def view_users(request):
  return render(request, 'admin/view_user.html')

def conversions(request):
  return render(request, 'admin/conversions.html')


def API(request):
  return render(request, 'admin/API.html')

def financial_reports(request):
  return render(request, 'admin/financial_reports.html')


def payment_history(request):
  return render(request, 'admin/payment_history.html')


def settings(request):
  return render(request, 'admin/settings.html')