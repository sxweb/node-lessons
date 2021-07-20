const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) =>{
    console.log(req.url);
    res.setHeader('Content-type', 'text/html');
    /*fs.access(path.join(__dirname, 'logs'), (err) =>{
        if(err){
            fs.mkdir(path.join(__dirname, 'logs'), (err) =>{
                if(err) throw err;
                console.log('the folder created');
            });
        }
    })

    fs.writeFile(path.join(__dirname, 'logs', 'request-logs.txt'),
        req.url,
        err => {
            if(err) throw err;
            console.log('the log wrote');
        }
    )*/
    res.write('hello from Node.js');
    res.end(`
        <div style="background: aqua;
         padding: 20px;
          width:200px;
          ">some content in the end</div>
    `);
});

server.listen(3000, () =>{
    console.log('server id running...');
});
