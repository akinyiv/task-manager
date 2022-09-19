const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const connectionURL = ("mongodb+srv://Vee:velma@cluster0.zvjqhrk.mongodb.net/");
const databaseName = "task-manager";

MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log("unable to connect to database");
    }

    const db = client.db(databaseName);

    db.collection("users").insertOne(
    {
        name: "drew",
        age: 27,
    },
    (error, result) => {
        if (error) {
            return console.log("unable to create user");
        }
        console.log(result);
    }
    );
});
