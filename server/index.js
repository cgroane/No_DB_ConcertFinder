const              express = require('express')
                    , bodyParser = require('body-parser')
                    , axios = require('axios')
                    app = express(),
                    cors = require('cors')

app.use(bodyParser.json());
app.use(cors())
const bandCtrl = require('./controllers/bands_controller')
// bandsintown api url: https://rest.bandsintown.com/artists/{artistname}
app.use('/', express.static(__dirname + '/../public'));

//after dirname put path to whatever the build folder is
//__dirname is the filepath of the index.js -- /server/index.js
//build path relative to this file should be '/../build'

app.get('/api/bands/:name', (req, res, next) => {
    console.log(req.params.name)
    axios.get(`https://rest.bandsintown.com/artists/${req.params.name}?app_id=cgroane_app`).then(response => {
    console.log(response);    
    res.json(response.data);
    }).catch(console.log);
});

app.get('/api/events/:name', (req,res, next) => {
     console.log(req.params.name)
    axios.get(`https://rest.bandsintown.com/artists/${req.params.name}/events?app_id=cgroane_app`).then(response => {
        console.log(response);
        res.json(response.data);
        }).catch(console.log);
});

app.post('api/bands', (req, res, next) => {

})

// app.get('/api/bands', (req, res) => {
//     console.log('server')
//     axios.get('https://rest.bandsintown.com/artists/maroon%205?app_id=cgroane_app').then(response => {
//         console.log(response);
//         res.json(response.data);
//     }).catch(console.log)
// })
// app.post('api/bands', (req, res, next) => {
//     console.log(req.params.array)
//     axios.post()
// }



app.get('api/bands', bandCtrl.readBands);
// app.get('api/events', bandCtrl.readEvents);
app.post('api/bands', bandCtrl.addBand);


const port = 3000;

app.listen(port, () => {
console.log(`Server listening on: ${port}`);
})