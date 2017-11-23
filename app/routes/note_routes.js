var ObjectID = require('mongodb').ObjectID;

module.exports  = function (app, db) {

    app.get('/api/notes', (req, res) => {
        db.collection('notes').find().toArray(function (err, documents) {
            res.send(documents);
        });
    });

    app.get('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        const filter = { '_id': new ObjectID(id) };
        db.collection('notes').findOne(filter, function (err, document) {
            if (err) {
                res.send({ 'error': 'An error has occurred'});
            } else {
                var json = {
                    data: document
                };

                res.send(json);
            }
        });
    });

    app.post('/api/notes', (req, res) => {
        const note = {
            title: req.body.title,
            body: req.body.body
        };
        db.collection('notes').insert(note, function (err, results) {
            if (err) {
                res.send({ 'error': 'An error has occurred.'});
            } else {
                res.send(results.ops[0]);
            }
        });
    });

    app.put('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        const filter = { '_id': new ObjectID(id) };
        const note = {
            title: req.body.title,
            body: req.body.body
        };

        db.collection('notes').update(filter, note, function (err, result) {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(note);
            }
        });
    });

    app.delete('/api/notes/:id', (req, res) => {
        const id = req.params.id;
        const filter = {
            '_id': new ObjectID(id)
        };
        db.collection('notes').remove(filter, function (err, item) {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send('Note ' + id + ' deleted');
            }
        });
    });
};
