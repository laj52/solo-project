const fetch = require('node-fetch');

const ytapiController = {};

ytapiController.findSongs = (req, res, next) => {
    const { platform, title } = req.body;
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${title}&key=AIzaSyDBlcwoZEdB1QjqYJwbXhZNJhTBK8aydYg`)
    .then((response)=> response.json())
    .then((data) => {
        res.locals.searchResults = data.items;
        // console.log(res.local.searchResults)
        next();
    });
};

module.exports = ytapiController;