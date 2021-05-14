import random
from locust import HttpUser, TaskSet, task, between
'''
    A Class that simulates the actions a user using the web client would do
    L/B tests to check that there is no error 500 (Internal Server Error)
    and can return within 2.5s of recieving the request.
'''
class WebUserBehavior(TaskSet):
    # Having Issues with Auth on Locust, so for now just interacting with Course. (Public)

    def on_start(self):
        # Create an Account and Login.
        # Generates a random username, and fixed password to login.
        endpoint = '/api/users/'
        # Choose some random large interval to avoid collisions in naming.
        name = random.randint(0, 36000)
        body = '{ "username":"user' + str(name) + \
                '", "password": "password"}'

        # Test: Want to load fast (Goal less than 2.5s)
        with self.client.post(endpoint, json=body,
            catch_response=True) as response:
            # Check response time and if it errored
            if response.elapsed.total_seconds() > 2.5:
                response.failure("Request took too long")
            elif response.status_code < 500:
                response.success()
    
    @task
    def profile_page(self):
        # Test: Want Profile Page to load fast (Goal less than 2.5s)
        with self.client.get("/api/current_user/",
            catch_response=True) as response:
            # Check response time and if it errored
            if response.elapsed.total_seconds() > 2.5:
                response.failure("Request took too long")
            elif response.status_code < 500:
                response.success()
    @task(2)
    def invalid_user(self):
        # Test: Invalid login credentials
        endpoint = '/token-auth/'
        # Choose some random large interval to avoid collisions in naming.
        body = '{ "username":"(Bobby); DROP TABLE User;--)", "password": "password"}'
        # Test: Want Homepage to load fast (Goal less than 2.5s)
        with self.client.post(endpoint, json=body,
            catch_response=True) as response:
            # Check response time and if it errored
            if response.elapsed.total_seconds() > 2.5:
                response.failure("Request took too long")
            elif response.status_code < 500:
                response.success()
    
    @task(3)
    def view_list_courses(self):
        # Test: Get the list of all courses.
        with self.client.get("/api/courses/",
            catch_response=True) as response:
            # Check response time and if it errored
            if response.elapsed.total_seconds() > 2.5:
                response.failure("Request took too long")
            elif response.status_code < 500:
                response.success()
    @task(2)
    def view_course(self):
        # Interval for chance of comparing hits and misses.
        number = random.randint(1, 10)
        with self.client.get("/api/courses/" + str(number),
            catch_response=True) as response:
            # Check response time and if it errored
            if response.elapsed.total_seconds() > 2.5:
                response.failure("Request took too long")
            elif response.status_code < 500:
                response.success()

# Class that gives a User a set of Tasks to run.
class WebUser(HttpUser):
    tasks = [WebUserBehavior]
    wait_time = between(1,3)

    # Run the tasks specified in the tasks
    @task
    def my_task(self):
        pass
