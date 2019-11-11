/* Implement your solution here */
// Loading the file system library
const fs = require('fs');

// File name from the common line params
const fileName = process.argv[2];

// Accessing the content of the file synchnously
var array = fs.readFileSync(fileName).toString().split("\n");

//Processing array
var tipoAnimale = new Array();
var freq = new Array();
for (var j=0; j<array.length; j++){
    freq[j]=0;
}

for (j=0; j<array.length; j++){
    if ((tipoAnimale.indexOf(array[j])) == -1){
        console.log('+++%s', array[j]);
        var newarray = tipoAnimale.push(array[j]);
        console.log('---%s', newarray);
    }else{
        freq[tipoAnimale.indexOf(array[j])]=freq[tipoAnimale.indexOf(array[j])]+1;
        //console.log('%d', tipoAnimale.indexOf(array[j]));
    }
}

//Write results
console.log('tag ----------- freq \n');
for(j=0; j<tipoAnimale.length; j++){
    console.log('%s ----------- %d \n', tipoAnimale[j], freq[j]);
}
