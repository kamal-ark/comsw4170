# comsw4170
UI Design class project

**Columbia Access Webapp**

Currently, this repository has HTML/CSS static web pages for the main screens

Also, a Flask backend is present that serves these on endpoints

**Instructions on how to run**

Requirement: Please install Flask before running this

The Flask server can be run by the command `#> python server.py`

http://127.0.0.1:5000 is the address to view the pages of the webapp

List of pages available
 
 - http://127.0.0.1:5000/home Home screen
 - http://127.0.0.1:5000/room Full room review page, with access details
 - http://127.0.0.1:5000/review Single review display
 - http://127.0.0.1:5000/addreview Add a room review and access details
 - http://127.0.0.1:5000/allreviews All reviews of a single room displayed

Note that the default address http://127.0.0.1:5000/ would also display the home screen ^^

**Code details** 

As Flask server usually searches for templates in the 'templates/' folder, this is overridden by
setting the 'template_home' to be the home directory in the repository.

***Files***

- server.py  
  Flask server for serving the endpoints with static HTML/CSS webpages
- homepage.html  
  Home page of the Columbia Access webapp  
  (this page includes an embedded, custom, dynamic map of the Columbia University Morningside Campus created using Google Maps. In lieu of a backend implementation connecting the map to the application at this stage, we used Google Maps' shape-description system to include building access characteristics and a link to our Google Form from our WoZ evaluation)
- review_add.html  
  Page for input entry of room review and access characteristics
- room_info_page.html  
  The main review page with all access details and selected top reviews
- single_room_review.html  
  Page with a single review of a room, with full details
- all_reviews.html  
  Page with all reviews of a specific room, with a scrollbar
- campus_map.png  
  Campus map image
- static/rsz_dropbar.png  
  Sort option dropdown bar (resized already for faster loading time)
- static/room_dropbar.png  
  Select room dropdown image  
- static/blg_dropbar.png  
  Select building dropdown image
- static/sbg-bar.png  
  Dark background with shading, for the slider with texts
- README.md  
  This readme file
