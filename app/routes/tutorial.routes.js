module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/tutorials", tutorials.createTutorial);
  
    // Retrieve all Tutorials
    router.get("/tutorials", tutorials.findAll);
  
    // Retrieve a single Tutorial with id
    router.get("/tutorials/:id", tutorials.findTutorialById);

    //Create a new Comment
    router.post("/comments",tutorials.createComment);

     // Retrieve a single Comment with id
     router.get("/comments/:id", tutorials.findCommentById);


  
    // Update a Tutorial with id
    //router.put("/:id", tutorials.update);
  
    // Delete a Tutorial with id
    //router.delete("/:id", tutorials.delete);
  
    // Delete all Tutorials
    //router.delete("/", tutorials.deleteAll);
  
    app.use('/api', router);
  };