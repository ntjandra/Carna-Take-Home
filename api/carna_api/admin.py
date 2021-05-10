from django.contrib import admin

# Register your models here.
from .models import User # , Course, Questions

# Users have first_name, last_name, bio
class UserAdmin(admin.ModelAdmin):
    list_display = ('first_name','last_name','bio')

# class CourseAdmin(admin.ModelAdmin):
#     # Display 
#     list_display = ('title', 'description', 'completed')


admin.site.register(User, UserAdmin)