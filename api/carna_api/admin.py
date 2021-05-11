from django.contrib import admin
from .models import CarnaUser, Course #, Questions


# Site Admins can manage Users and Courses.

# Users have first_name, last_name, bio
class UserAdmin(admin.ModelAdmin):
    list_display = ('first_name','last_name','bio')

class CourseAdmin(admin.ModelAdmin):
    # Display Courses
    list_display = ('id', 'creator_id', 'title', 'release_date', 'description', 'stars')

admin.site.register(CarnaUser, UserAdmin)
admin.site.register(Course, CourseAdmin)