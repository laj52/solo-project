const scKey = require('soundcloud-key-fetch');

scKey.testKey('H4SFXYyIL6YGTNY9Q81Q0wSjThiaxIOq').then(result=>{
    if (result) console.log('it works');
    else console.log('no work');
})

//H4SFXYyIL6YGTNY9Q81Q0wSjThiaxIOq