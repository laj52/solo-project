const path = require('path');
const express = require('express');
const db = require('./db/songs');
const ytapiController = require('./controllers/ytapiController')

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, '../build')));
app.use(express.json());
// app.use(express.urlencoded({extended: true}));

app.get('/api', (req, res) => {
    // console.log(db.find());
    // res.locals.playlist = db.find();
    // res.json(res.locals.playlist);
    res.json({ backend: 'backend' })
});

app.get('/api/playlist', (req, res) => {
    // console.log(db.find());
    res.json(JSON.stringify(db.find()));
    // res.json(db.find());
    // res.json({ backend: 'backend' })
});

app.put('/api/playlist', (req, res, next) => {
    const saveResult = db.save(req.body);
    if (saveResult instanceof Error) {
      return next({ code: 400, error: saveResult });
    }
    res.json(saveResult);
});

app.post('/api/search', ytapiController.findSongs, (req, res) => {
    res.status(200).json({'songs': res.locals.searchResults})
})

app.use(({ code, error }, req, res, next) => {
    res.status(code).json({ error });
});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}...`);
});
  
module.exports = app;
