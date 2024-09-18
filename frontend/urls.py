from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api_documentation', views.api_documentation, name='api_documentation'),
    path('bet_converter', views.bet_converter, name='bet_converter'),
    path('bet_editor', views.bet_editor, name='bet_editor'),
    path('bet_viewer', views.bet_viewer, name='bet_viewer'),
    path('free_codes', views.free_codes, name='free_codes'),
    path('hot_predictions', views.hot_predictions, name='hot_predictions'),
    path('pricing', views.pricing, name='pricing'),
    path('contact_us', views.contact_us, name='contact_us'),
    path('privacy', views.privacy, name='privacy'),
    path('terms', views.terms, name='terms'),
    
    
    # authentication
      path('auth/login', views.login, name='login'),
      path('auth/register', views.register, name='register'),
      path('auth/forget_password', views.forget_password, name='forget_password'),
      path('auth/reset_password', views.reset_password, name='reset_password'),
    
    # dashboard
    path('dashboard', views.dashboard, name='dashboard'),
    
    
    #Admin dashboard
    path('admin/index', views.adminIndex, name='adminIndex'),
    path('admin/users', views.users, name='users'),
    path('admin/view_user', views.view_users, name='view_user'),
    path('admin/conversions', views.conversions, name='conversions'),
    path('admin/API', views.API, name='API'),
    path('admin/transactions/financial_reports', views.financial_reports, name='financial_reports'),
    path('admin/transctions/payment_history', views.payment_history, name='payment_history'),
    path('admin/settings', views.settings, name='settings'),
                
]