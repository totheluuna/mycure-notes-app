module.exports = {
    DB: process.env.MONGO_URL ? process.env.MONGO_URL : "mongodb+srv://notes-app-user:notesapppass123@mycure-notes-app-y4uy1.mongodb.net/mycure-notes-db?retryWrites=true&w=majority",
    APP_PORT: process.env.APP_PORT ? process.env.APP_PORT : 80,
};