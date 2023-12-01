from flask import Flask
from flask import render_template
# Set template folder to folder with HTML files
app = Flask(__name__, template_folder='')

@app.route('/')
def home():
	return homepage()

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
	return render_template('all_reviews.html')


if __name__ == "__main__":
	app.run(debug=True)
