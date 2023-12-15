from flask import Flask
from flask import render_template
# Set template folder to folder with HTML files
app = Flask(__name__, template_folder='')

"""
{
	"id": ,
	"user": "",
	"date": "",
	"stars": "",
	"thumbs_up": ,
	"thumbs_down": ,
	"review_text": ""
},
"""

reviews_data = [
{
	"id": 0,
	"user": "AviramRah",
	"date": "oct. 5th, 2023",
	"stars": "3",
	"thumbs_up": "2",
	"thumbs_down": "26",
	"review_text": "this room is equipped with video recording capabilities and my professor was amenable to my need for... "
},

{
	"id": 1,
	"user": "Nothavingit",
	"date": "oct. 6th, 2023",
	"stars": "2",
	"thumbs_up": "24",
	"thumbs_down": "3",
	"review_text": "we had in class activities and i could not get around the classroom because of all the stairs so that made... "
},

{
	"id": 2,
	"user": "Yallarenice",
	"date": "oct. 9th, 2023",
	"stars": "2",
	"thumbs_up": "2",
	"thumbs_down": "0",
	"review_text": "screen was too far i couldn't see anything.."
},


{
	"id": 3,
	"user": "QueenC",
	"date": "oct. 10th, 2023",
	"stars": "3",
	"thumbs_up": "1",
	"thumbs_down": "3",
	"review_text": "love the classroom, really spacious and never full!"
},

{
	"id": 4,
	"user": "Peaceandlove",
	"date": "oct. 10th, 2023",
	"stars": "1",
	"thumbs_up": "12",
	"thumbs_down": "0",
	"review_text": "to get in with my wheelchair i needed to go down the elevator to the 4th floor and then ask someon... "
},

{
	"id": 5,
	"user": "Nickname",
	"date": "oct. 11th, 2023",
	"stars": "2",
	"thumbs_up": "2",
	"thumbs_down": "26",
	"review_text": "speakers are really low volume, we need to ask someone to handle that, hard to hear in the back!"
},

{
	"id": 6,
	"user": "Anonymous",
	"date": "oct. 12th, 2023",
	"stars": "3",
	"thumbs_up": "24",
	"thumbs_down": "23",
	"review_text": "Not a good class for any purposes. Maybe do not enroll in any course that teaches here..."
},

{
	"id": 7,
	"user": "Notwrong",
	"date": "oct. 12th, 2023",
	"stars": "3",
	"thumbs_up": "45",
	"thumbs_down": "1",
	"review_text": "This classroom has a good design to emulate in other rooms too. The acoustics is fabulous too!"
},

{
	"id": 8,
	"user": "AviViva",
	"date": "dec. 23rd, 2023",
	"stars": "5",
	"thumbs_up": "24",
	"thumbs_down": "1",
	"review_text": "This is a good place to relax and listen to lectures. Good luck sleeping here though..."
},

{
	"id": 9,
	"user": "FloKi",
	"date": "dec. 24th, 2023",
	"stars": "4",
	"thumbs_up": "18",
	"thumbs_down": "0",
	"review_text": "Hard to miss any class here, yet the timing determines how full this is"
},
]


@app.route('/')
@app.route('/home')
def homepage():
	return render_template('homepage.html')

@app.route('/review')
def reviewpage():
	return render_template('single_room_review.html')

@app.route('/room')
def roompage():
	return render_template('room_info_page.html')

@app.route('/addreview')
def addreviewpage():
	return render_template('review_add.html')

@app.route('/allreviews')
def allreviews():
	return render_template('all_reviews.html', reviews_data=reviews_data)


if __name__ == "__main__":
	app.run(debug=True)
