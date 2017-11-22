module.exports  = function (app, db) {
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
        // res.send(note);
    });
};
