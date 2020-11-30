const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const http = require("http");
const path = require("path");
// const homeController = require("./controllers/homeController");
// const userController = require("./controllers/userController");
// const homeRouter = express.Router();
// const userRouter = express.Router();
const userRouter = require("./routers/userRouter.js");
const homeRouter = require("./routers/homeRouter.js");

// userRouter.use("/create",
//     (request, response) =>
//     {
//         response.send("Adding user");
//     });
// userRouter.use("/",
//     (request, response) =>
//     {
//         response.send("List of users");
//     });
// app.use("/users", userRouter);

// app.get("/about",
//     (request, response) =>
//     {
//         response.send("About Website");
//     });
// app.get("/",
//     (request, response) =>
//     {
//         response.send("Main Page");
//     });


// userRouter.use("/create", userController.addUser);
// userRouter.use("/", userController.getUsers);
// app.use("/users", userRouter);

// homeRouter.use("/about", homeController.about);
// homeRouter.use("/", homeController.index);
// app.use("/", homeRouter);



app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/users", userRouter);
app.use("/", homeRouter);

app.use(
    (request, response, next) =>
    {
        response.status(404).send("The page is not found.");
    });

const port = process.env.PORT || 3000;
const httpServer = http.createServer(app);
httpServer.listen(port, () => { console.log("Server started. Port: " + port); });
