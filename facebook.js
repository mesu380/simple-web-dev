var database = [
    {
        username:"harsha",
        password:"blah"
    },
    {
       username:"dhruva",
       password:"blah2"
    },
    {
        username:"medha",
        password:"blah3"
    }
];

var newsfeed = [
    {
        username:"poornima",
        timeline:"made good mexican food today:)"
    },
    {
        username:"babu",
        timeline:"bikes are awesome!!"
    }
];

function isuservalid(username,password){
    for(var i=0;i<database.length;i++){
        if(database[i].username===username && database[i].password===password){
            return true;
        }
    }
    return false;
}

function signin(username,password){
    if(isuservalid(username,password)){
        console.log(newsfeed);
    }
    else{
        alert("sorry wrong information");
    }
}

var username=prompt("what is your username?");
var password=prompt("what is your password?");

signin(username,password);