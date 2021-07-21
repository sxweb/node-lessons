const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) =>{
    if(req.method === 'GET'){
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        switch (req.url){
            case '/':
                render(req, res, 'index.html');
                break;
            case '/about':
                render(req, res, 'about.html');
                break;
            case '/api/users':
                res.writeHead(200, {
                    'Content-Type': 'text/json'
                })
                const users = [
                    {name: 'Yuriy', age: 36},
                    {name: 'Max', age: 45}
                ];
                res.end(JSON.stringify(users));

        }
    }else if(req.method === 'POST'){
        const body = [];
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        })
        req.on('data', data =>{
            body.push(Buffer.from(data))
        })
        req.on('end', () =>{
            const message = body.toString().split('=')[1];
            res.end(`
                <h1>Your message is: ${message}</h1>
            
            `)
        })

    }
})

server.listen(3000, () => {
    console.log('Server is running...');
})

function render(req, res, fileName){
    fs.readFile(
        path.join(__dirname, 'views', fileName),
        'utf-8',
        (err, content) =>{
            if(err) throw err;
            res.end(content);
        }
    )
}