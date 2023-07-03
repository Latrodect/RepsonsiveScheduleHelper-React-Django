from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate, login
from .serializers import SignInSerializer
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from rest_framework_simplejwt.tokens import RefreshToken

@method_decorator(csrf_exempt, name='dispatch') # override dispatch method 
class SignView(APIView):
    """"Sign Operation Class
    
   Post Request for Sign in:
   @params
   -username
   -password
   Get Request for Sign out
    """

    def post(self, request):
        serializer = SignInSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                refresh = RefreshToken.for_user(user)
            return Response({'refresh': str(refresh), 'access': str(refresh.access_token)}, status=201)
        return Response(serializer.errors, status=400)

