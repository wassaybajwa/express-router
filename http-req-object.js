const http = require('http')

const server = http.createServer((req, res) => {

    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h1>home page</h1>`)
        res.end()
    }else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h1>about page</h1>`)
        res.end()
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(`<h1>requested page not found</h1>`)
        res.end()
    }
    
    // console.log(req.method)
    // console.log(req.url)
    
})

server.listen(3001)
