# MYCURE Note Taking Application 

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
* Deployment on Heroku, the app kept crashing after deployment, works locally. Might have something to do with inconsistencies of versions of NodeJS with my setup to Heroku server.
* Completion of notes and filtering between completed and not yet completed notes
* Notes are not related to specific user, all notes in DB can be seen by any user
