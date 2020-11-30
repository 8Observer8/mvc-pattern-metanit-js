// exports.addUser = (request, response) =>
// {
//     response.send("Adding user");
// };

// exports.getUsers = (request, response) =>
// {
//     response.send("User list");
// };

const User = require("../models/user.js");

exports.addUser = (request, response) =>
{
    response.render("create.hbs");
};

// exports.addUser = () => (request, response) =>
// {
//     response.render("create.hbs");
// };

exports.getUsers = (request, response) =>
{
    response.render("users.hbs", {
        users: User.getAll()
    });
};

exports.postUser = (request, response) =>
{
    const username = request.body.name;
    const userage = request.body.age;
    const user = new User(username, userage);
    user.save();
    response.redirect("/users");
}