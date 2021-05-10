from django.urls import path
from .views import current_user, UserList

# Paths to handle login state, jwt is stateless
urlpatterns = [
    path('current_user/', current_user),
    path('users/', UserList.as_view())
]