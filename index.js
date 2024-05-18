const express = require('express');
const engine = require('ejs-locals');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', express.static(__dirname+"/public"));
app.engine('ejs', engine);
app.set('views', __dirname+'/views')
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index', {name:"Kerly Cervantes"});
});

app.listen(3000, ()=>console.log('Exmple linstening port 3000!'))