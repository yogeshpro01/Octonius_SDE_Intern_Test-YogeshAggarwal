// TODO API
var express = require('express');
var router = express.Router();

// Setup connection

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var todoSchema = new schema({
    name: String,
    description: String,
    status: String
},{
    collection: 'todos',
    versionKey: false
});

mongoose.connect('mongodb+srv://user:pass@cluster0-lgf3i.mongodb.net/todoapp',  { useNewUrlParser: true }, (err, conn) => {
    if(err){
        throw err;
    }
    console.log("Connection successful");
});
var todo = mongoose.model('todo',todoSchema);

// Find all existing TODOS
// returns: All documents in 'todo'

router.get('/todos', function(req, res, next){
    todo.find({}, function(err, todos){
        if(err){
            res.send(err);
        }else{
            res.json(todos);
        }
    });
});

// Adding new TODOS
// requires: JSON => { name: "setName", isCompleted: false }
// returns: invalid data : status : 400
//          valid data : status : 200 

router.post('/todo/new/', function(req, res){
    var newTodo = new todo({
        name: req.body.name,
        description: req.body.description,
        status: req.body.status
    });
    if(!newTodo.name){
        res.status(400);
        res.json({
            "error" : "invalid data"
        });
    }else{ 
        newTodo.save( function(err, success){
            if(err) res.json(err);
            else{
                res.status(200);
                res.json(success);
            }
        });
    }
});

// Find one Todo
// requires: params : todo._id
// returns: invalid id : JSON => { "error" : "invalid id" }
//          valid id : todo object

router.get('/todo/:id',  function(req, res){
    todo.findOne({
        _id: req.params.id
    }, function(err, todos){
        if(err){
            res.json({ "error" : "invalid id"});
        }else{
            res.json(todos);
        }
    });
});

// Update one todo
// requires: params: todo._id
//           JSON => { name : "updateName", isCompleted : "updateCompleted" }
// returns: invalid Object : status : 400, JSON => { "error" : "invalid object" }
//          invalid id : JSON => { "error" : "invalid id" }
//          valid id : updated todo object

router.put('/todo/:id', function(req, res){
    var update = {};
    if(req.body.name){
        update.name = req.body.name;
    }
    if(req.body.description){
        update.description = req.body.description; 
    }
    if(req.body.status){
        update.status = req.body.status;
    }
    if(!update){
        res.status(400);
        res.json({"error" : "invalid object"});
    }else{
        todo.update({
            _id : req.params.id
        }, update, function(err, success){
            if(err){
                res.json({"error" : "invalid object"});
            }else{
                res.json(success);
            }
        });
    }
});

// Delete todo

router.get('/todo/delete/:id', function(req, res){
    todo.deleteOne({
        _id: req.params.id
    }, function(err, todos){
        if(err){
            res.json({ "error" : "invalid id"});
        }else{
            res.json(todos);
        }
    });
});

module.exports = router;