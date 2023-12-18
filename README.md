# comsw4170
UI Design class project

**Columbia Access Webapp**

This repository contains the HTML/CSS/Javascript web pages for the main screens of a minimum viable implementation of CU Access - Columbia's student-developed classroom accessibility rating website

We also include a Flask backend that serves these on endpoints

**Instructions on how to run**

Requirement: Please install Flask before running

The Flask server can be run by the command `#> python server.py`

Address to view the webapp: http://127.0.0.1:5000

List of pages available
 
 - http://127.0.0.1:5000/home Home screen
 - http://127.0.0.1:5000/room (...2) Full room review page, with access details
 - http://127.0.0.1:5000/review (...2, 3) Single review display
 - http://127.0.0.1:5000/image Classroom image display
 - http://127.0.0.1:5000/addreview Add a room review and access details
 - http://127.0.0.1:5000/allreviews All reviews of a single room displayed

Note that the default address http://127.0.0.1:5000/ would also display the home screen

**Code details** 

As Flask server usually searches for templates in the 'templates/' folder, this is overridden by
setting the 'template_home' to be the home directory in the repository.

***Files***

- [sever.py]([http://www.google.fr/](https://github.com/kamal-ark/comsw4170/blob/main/server.py)
  Flask server for serving the endpoints with the HTML/CSS we)bpages
- homepage.html  
  Home page of the CU Access webapp  
  (this page includes an embedded, custom, dynamic map of the Columbia University Morningside Campus created using Google Maps. In lieu of a backend implementation connecting the map to the application at this stage, we used Google Maps' to include building access characteristics and a link to our review page, which is accessible when our Flask server is running)
- review_add.html  
  Page for input entry of room review and access characteristics
- classroom_image.html
  Classroom image display page
- room_info_page.html  (..2)
  The main review page with all access details and selected top reviews
- single_room_review.html  (..2, 3)
  Page with a single review of a room, with full details
- all_reviews.html  
  Page with all reviews of a specific room, with a scrollbar
- campus_map.png  
  Campus map image (from earlier prototypes)
- static/rsz_dropbar.png  
  Sort option dropdown bar (resized already for faster loading time)
- static/room_dropbar.png  
  Select room dropdown image  
- static/blg_dropbar.png  
  Select building dropdown image
- static/sbg-bar.png  
  Dark background with shading, for the slider with texts
  - pupin428_2.jpg
    image of classroom used in classroom_image.html
- README.md  
  This readme file
