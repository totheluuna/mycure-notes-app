# MYCURE Note Taking Application 
###  Credit Card Application Manager

[Link to web app (deployed in AWS EC2 instance)](http://ec2-34-229-179-255.compute-1.amazonaws.com:8080/pending/)

This is a simple web application to take notes.

### Tech Stack
* VueJS
* ExpressJS
* MongoDB

### Install Dependencies
```
$ npm install
```

### Run Web Application in Development
```sh
node server/app.js
```
Terminal:
```sh
$ App is running on 4000
$ Database is connected
```

### Thing not able to do
* Deployment on Heroku, the app kept crashing after deployment, works locally.
* Completion of notes and filtering between completed and not yet completed notes
* Notes are not related to specific user, all notes in DB can be seen by any user