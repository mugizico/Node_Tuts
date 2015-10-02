var fs = require('fs');

var path = require('path');
var dir = path.join(__dirname, 'temp');
var source = __filename;
var target = path.join(dir, 'target');



///
fs.mkdir(dir, handlingError(madeDirectory));
  function madeDirectory(){
    fs.readFile(source, handlingError(obtainedFile));
}

 function obtainedFile(content){
        fs.writeFile(target, content, handlingError(wroteFile));
  }

function wroteFile(){
      console.log('all done!');
          }
  

/*function that handles error for all other callback functions*/
function handlingError(cb){
  return function(err, result){
    if(err){
      handleError(err);
    }
    else {
      cb(result);
    }
  }
}

function handleError(err){
  console.error(err);
}
