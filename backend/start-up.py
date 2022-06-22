from flask import Flask, request, render_template, jsonify, json
from flask_cors import CORS
import pymongo
from bson import ObjectId
from bson.objectid import ObjectId
from pymongo import MongoClient
from bson.json_util import dumps

import requests

app = Flask(__name__)
CORS(app)
client = MongoClient("mongodb://127.0.0.1:27017")  # host uri
db = client.mymongodb1  # Select the database
courses = db.course
students = db.student
students.create_index('stud_id', unique = True)

@app.route('/', methods=['GET', 'POST'])
def index():
    return "Hello World"


@app.route("/about")
def about():
    return "About page"


@app.route("/eventslist", methods=['GET', 'POST'])
def lists():
    # Display the all Events
    print("eventslist is called")
    events_l = courses.find()
    print("test", type(events_l))
    return dumps(events_l)


@app.route("/createevent", methods=['GET', 'POST'])
def create_course():
    print("event created successfully")
    print("title", request.json['title'])

    courses.insert_one({"id": request.json['id'], "title": request.json['title'],
                  "date": request.json['date'], "description": request.json['description']})
    return "event created successfully"

@app.route("/studentslist", methods=['GET', 'POST'])
def studentlists():
    # Display the all Events
    print("studentslist is called")
    students_l = students.find()
    print("test", type(students_l))
    return dumps(students_l)


@app.route("/createstudent", methods=['GET', 'POST'])
def create_student():
    print("student created successfully")
    print("stud_id", request.json['stud_id'])

    try:
        students.insert_one({"stud_id": request.json['stud_id'], "fname": request.json['fname'],
                             "lname": request.json['lname'], "email": request.json['email'], "courses": []})
        return "student created successfully"
    except Exception:
        return "Sorry cannot be saved"


@app.route("/addcourse", methods=['GET', 'POST'])
def add_course():
    filter = {'stud_id': request.json['stud_id']}

    # Values to be updated.
    newvalues = {"$set": {'courses': request.json['courses']}}

    # Using update_one() method for single
    # updation.
    students.update_one(filter, newvalues)
    return "student created successfully"

@app.route("/updatestudent", methods=['GET', 'POST'])
def update_student():
    filter = {'stud_id': request.json['stud_id']}

    # Values to be updated.
    newvalues = {"$set": {'courses': request.json['courses'] , 'lname':request.json['lname'] , 'fname':request.json['fname'] }}

    # Using update_one() method for single
    # updation.
    students.update_one(filter, newvalues)
    return "student created successfully"

if __name__ == '__main__':
    app.run(debug=True)