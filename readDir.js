var fs = require('fs');

module.exports = function readDir(dir, data) {
	fs.readdir(dir, function(err, list) {
		console.log(list);
	});
}