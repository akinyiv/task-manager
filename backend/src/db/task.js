// description - String
//completed - Boolean

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Vee:velma@cluster0.zvjqhrk.mongodb.net/task-manager-api");

const Task = mongoose.model("Task", {
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
    },
});

const person1 = new User({
    description: "shopping",
    completed: true,
});

person1.save().then(() => {
    console.log(person1);
})
.catch((error) => {
    console.log("Error", error);
});