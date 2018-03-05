const app = require('./app/server.js');
const port = process.env.PORT || process.argv[2] || 8080;

app.listen(port, function() { 
        console.log(`A long time ago, on port ${port}...`); 
});
