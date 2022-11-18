const fs = require('fs');



const writeLocation = `${__dirname}/songs.dev.json`;
let songlist = JSON.parse(fs.readFileSync(writeLocation));

const db = {};

db.save = (list) => {//reinitializes both the playlist const and songs.dev.json to the list parameter (syncing them)
    //error conditions here
    db.write(list);
    db.reset();
    return songlist;
}

db.find = () => {//returns whole playlist array at songs.dev.json
    db.reset();
    // console.log(playlist)
    return songlist
}

db.drop = () => {//reinitializes the playlist and songs.dev.json to an empty array
    songlist = [];
    db.write(songlist);
}

db.write = (data) => {//replaces songs.dev.json with data parameter, but not the playlist const
    fs.writeFileSync(writeLocation, JSON.stringify(data, null, 2));
}

db.reset = () => {//reinitializes playlist to songs.dev.json
    songlist = JSON.parse(fs.readFileSync(writeLocation));
};

module.exports = db;