var express=require('express');
var mongodb=require('mongodb');
var app=express();
var url=require('url');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(function(req,res,next){
    res.setHeader( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Accept,Accept-Language,Content-Language,Content-Type');
    res.setHeader('Access-Control-Allow-Origin','http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods','http://localhost:4200','POST, GET, PUT, OPTIONS, DELETE');
    res.setHeader('Access-Control-Allow-Credentials','http://localhost:4200', true);
    next();
});

app.set('port', process.env.port|| 3000);

var url="mongodb://localhost:27017/meanApp";
var mongoClient=mongodb.MongoClient;
var database=null;
mongoClient.connect(url,function(err,db){
    if(err) console.log('There was error with database.');
    else console.log('Connection with database succeeded.');
    database=db.db('meanApp');
    //db.close();
});


app.get('/',function(req,res){
    //res.send("asda");
});

app.post('/login',function(req,res){
    
    //console.log(req.body);
    database.collection("userCollection").findOne(

        {$and :[
            {username: req.body.username},
            {password: req.body.password}
        ]},
        (err, result) => {

    if(err) {
      res.status(500).send(err);
      return;
    }

    if(!result) {
        data = {
            "meta": {
                "status": "failure",
                "message": "Username or password are invalid"
            }
        };
        res.status(401).send(data);
    } else {
        data = {
            "meta": {
                "status": "success",
                "message": "Login successful"
            }
        };
        res.json(data);
    }
    }
    );

});

app.get('/getBlogs/:id',function(req,res){
    
    console.log('Debug from backend: app.get blogs by id-1....' + req.params.id);
    var id=req.params.id;
    console.log('Debug from backend: app.get blogs by id-2....' + id);
    
    database.collection("blogCollection").find({"author":id}).count().then((data)=>{
        count1=data;
        console.log('Number of documents....' + data);
    });
    
    database.collection("blogCollection").find({"author":id},{id:1,author:1,title:1,content:1},function(err,blogs){
        let blog_array=[];
        if(err){
            res.send('Error occured');
        }
        if(blogs){
            blogs.forEach( blog=>{
                blog_array.push(blog);
                console.log('Debug from backend 1....' + JSON.stringify(blog));
            }).then(data=>{
                console.log('Array of blogs....' + blog_array);
                res.send(blog_array);
            });
            
        }
        
    });
});

app.get('/getBlog/:id',function(req,res){
    console.log('Get blog with id....' + req.params.id);
    database.collection('blogCollection').findOne({"id":req.params.id},{id:1,author:1,title:1,content:1}, function(err,blog){
        if(err){
            res.send('Error occured');
        }
        if(blog){
            console.log("Blog from database: " + blog);
            res.send(blog);
        }
    });
});

app.post('/newBlog',function(req,res){
    console.log('Debug from newblog request on backend....' + req.body.author + " " + req.body.title + " " + req.body.content);
    database.collection('blogCollection').insertOne({"id":req.body.id,"author":req.body.author,"title":req.body.title,"content":req.body.content});
    res.status(200).end();
});

app.put('/editBlog/:id',function(req,res){

    console.log('Updating document with id: ' + req.body.id);
    database.collection('blogCollection').replaceOne({"id":req.body.id},
    {$set:
        {
            "author":req.body.author,
            "title": req.body.title,
            "content":req.body.content
        }
    },
    (err,data)=>{
        if(err){
            res.status(500).send(err);
        }
        if(data){
            result={
                "message":"Successful editing!"
            };
            res.json(result);
        }
    });
});

app.delete('/deleteBlog/:id',function(req,res){
    database.collection('blogCollection').remove({"id":req.params.id});
    res.status(200).end();
});

app.get('/logout',function(req,res){

    database.close();

});

app.listen(app.get('port'),function(err,res){
    console.log('Backend server started.');
});