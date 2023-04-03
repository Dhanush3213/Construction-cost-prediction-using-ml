from rest_framework import serializers
from django.contrib.auth.models import User







class SignUpSerializer(serializers.ModelSerializer):
    
    password_2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'password', 'password_2', 'email']
        extra_kwargs = {'password': {'write_only': True}}

    def save(self):
        for i in ['first_name', 'last_name', 'username', 'password', 'password_2', 'email']:
            if i not in self.validated_data:
                raise serializers.ValidationError({i: f"{i} is needed"})
        password = self.validated_data['password']
        password_2 = self.validated_data['password_2']

        if password != password_2:
            raise serializers.ValidationError({'password': 'Passwords must match.'})
        else:
            new_account = User(username=self.validated_data['username'], email=self.validated_data['email'],
            first_name=self.validated_data['first_name'], last_name=self.validated_data['last_name'])
            new_account.set_password(password)
            new_account.save()
            
            return new_account







class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()
