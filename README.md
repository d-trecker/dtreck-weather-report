# Challenge 6 Server-Side APIs Challenge

Title: D-Treck Weather Report</br>
Student: Dylan Trecker</br>
Description: A weather dashboard.</br>
Site Link:  </br>
Full Repository: https://github.com/d-trecker/dtreck-weather-report.git </br>
Get the repository by: $ git clone git@github.com:d-trecker/dtreck-weather-report.git </br>

User Story</br>
AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly


Acceptance Criteria </br>
GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history

-Dashboard allows for user to search for a city and is presented with current and future conditions for that city. That city is also added to the search history.

WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

-City name, date, icon with weather conditions, the temperature, the humidity, wind speed are displayed. Could not find uv index on the api. 

WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe

-could not find uv index on api. 

WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity

-Five day forecast displays date, icon, temp, wind speed, and humidity. 

WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

-Search history buttons present historical current and future condistions for that city when clicked. 

</br>
</br>

Grading Requirements
This challenge is graded based on the following criteria:

Technical Acceptance Criteria: 40%
Satisfies all of the above acceptance criteria plus the following:

Uses the OpenWeather API to retrieve weather data

Uses localStorage to store persistent data

Deployment: 32%
Application deployed at live URL

Application loads with no errors

Application GitHub URL submitted

GitHub repository that contains application code

Application Quality: 15%
Application user experience is intuitive and easy to navigate

Application user interface style is clean and polished

Application resembles the mock-up functionality provided in the Challenge instructions

Repository Quality: 13%
Repository has a unique name

Repository follows best practices for file structure and naming conventions

Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

Repository contains multiple descriptive commit messages

Repository contains quality README file with description, screenshot, and link to deployed application

Screenshot: 
![](assets/images/screen-shot.PNG)
