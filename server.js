let express = require('express');
let bodyParser = require('body-parser');
let MongoClient = require('mongodb').MongoClient;
let app = express();

MongoClient.connect('mongodb://listener:password@ds263138.mlab.com:63138/playlist_songs', (err,client) =>{
if(err) return console.log(err)
  let db= client.db('playlist_songs')
  app.listen(8000, function(){
    console.log('running on a server')
  });

  app.set('view engine', 'ejs')
  app.use(bodyParser.urlencoded({extended: true}))
  app.use(express.static('public'))
  app.use(bodyParser.json())


  app.get('/', (req,res)=>{
    var cursor = db.collection('songs').find()
    cursor.toArray(function(err, results){
      if(err) return console.log (err)
      res.render('index.ejs', {songs: results})
       console.log(results)
   })
});



app.post('/songs', (req,res) =>{
  db.collection('songs').save(req.body, (err, result) => {
  if (err) return console.log(err)
  console.log('saved to database')
  res.redirect('/')
  });
});


})
