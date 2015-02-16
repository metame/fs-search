// A test function for file content searching
var fs = require('fs')
var path = require('path')

// Initial setup to pass file directory in console as 2nd argument, query as third
var dir = process.argv[2]
var query = process.argv[3]

fs.readdir(dir, function(err, list) {
  if(err) return err
  console.log(list)
})

console.log(list.length)