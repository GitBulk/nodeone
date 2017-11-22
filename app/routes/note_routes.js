var ObjectID = require('mongodb').ObjectID;

module.exports  = function (app, db) {

    app.get('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        const filter = { '_id': new ObjectID(id) };
        db.collection('notes').findOne(filter, function (err, document) {
            if (err) {
                res.send({ 'error': 'An error has occurred'});
            } else {
                res.send(document);
            }
        });
    });

    app.post('/api/notes', (req, res) => {
        console.log('body json');
        console.log(req.body);
        const note = {
            text: req.body.title,
            body: req.body.body
        };
        db.collection('notes').insert(note, function (err, results) {
            if (err) {
                res.send({ 'error': 'An error has occurred.'});
            } else {
                console.log("results:");
                console.log(results);
                res.send(results.ops[0]);
            }
        });
    });
};
