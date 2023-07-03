from django.urls import path
from .views import SignView

app_name = 'waspsapi'

urlpatterns = [
    path('signin/', SignView.as_view(), name='signin')
]