let bands = [];

let events = [];
//add events array

//add api --> is this just a matter of writing in a different api in the get functions?


//how is data added to these arrays and how do I access that data in my components?

let id = 0;

module.exports = {
    addBand(req, res, next) {
        req.body.id = id;
        bands.push(req.body)
        id += 1;
        res.json(bands);
    },

    readBands(req, res, next) {
        res.json(bands);
        console.log(bands);
        console.log(res)
    },

    update(req, res, next) {
        
    },
    
    delete(req, res, next) {

    },

    postBands(req, res, next) {
        bands.push(req.body.bands)
    },

    readEvents(req, res, next){
        res.json(events);
        console.log(events);
        console.log(res)
    }
}