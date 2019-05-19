# Todo App
This project has been created for the Octonius SDE Intern test by Yogesh Aggarwal.  NPM and Angular must be installed in the machine to run this project. To run the app, enter the following command in the command prompt. (Make sure you're in the ```todo_app/todo directory```). 
```
npm start
```
# Frontend
Here is the UI of the project made using Material design.

![](images/intro.PNG)

Let's add a todo. We click "Create New Todo".

![](images/create.PNG)

Here, we enter the name and description of the todo. The default status is set as "Open". We click save and are redirected to the homepage.

![](images/create-completed.PNG)

The todo has been successfully added! Now, let's try editing an existing todo. We click edit on task #4 and are redirected to the edit page.

![](images/edit.PNG)

After making the edits, we click save and are redirected to the homepage. 

![](images/edit-completed.PNG)

The todo has been edited! Now, let's delete a todo. We click delete on task #3

![](images/delete.PNG)

The todo has been deleted!


# Backend
The backend is written in node.js and the database used is a MongoDB cloud database created using mLab/mongoDBAtlas. Here are the screenshots of api requests made through postman. The server is running at localhost:4000/api/v1/

1. To fetch all todos

![](images/get-all-todos.PNG)

2. To fetch a single todo

![](images/get-one-todo.PNG)

3. To add a new todo 

![](images/new-todo-start.PNG)

![](images/new-todo-finish.PNG)

4. To update a todo

![](images/update-todo.PNG)

![](images/update-todo-resp.PNG)

5. To delete a todo

![](images/delete-todo.PNG)


