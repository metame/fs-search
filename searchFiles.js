// A test function for file system searching

var fs = require('fs')
var path = require('path')

// Initial setup to pass file directory in console as 2nd argument, query as third, & type of query as 4th
var dir = process.argv[2]
var query = process.argv[3]
var type = process.argv[4]
var noFiles = "No files found in that directory!"

fs.readdir(dir, function(err, list) {
  // if(err) return err;
  if(list !== undefined){

    if(list.length == 0) return console.log(noFiles)

    if(type == "ext") {
      for(var i=0; i<=list.length; i++){
        if(path.extname(list[i]) == "." + query){
          console.log(list[i])
        }
      }
    } else if(type == "name") {
      for(var i=0; i<=list.length; i++){
        if(list[i].indexOf(query) > -1) {
          console.log(list[i])
        }
      }
    } else {
      console.log(noFiles)
    }
  } else {
    console.log("That directory does not exist!")
  }

})