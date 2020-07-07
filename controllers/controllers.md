### MVC

controllers_dir Handle the logic of the routers

routes_dir Handle routing

models_dir Handle data storage

### res

since we are building api we should respond with a json format. res.json() sends a response with its parameter converted to a JSON string using JSON.stringify().

### methods

select > You select what fields you want to get. eg: Post.find().select("\_id title body")
