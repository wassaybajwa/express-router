const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {

    const url = req.url;
    if(url === '/'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }else if(url === '/about'){
        res.writeHead(200, {'content-type': 'text/html'})
        res.write(`<h1>about page</h1>`)
        res.end()
    }
    //styles
    else if(url === '/styles.css'){
        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    //image
    else if(url === '/logo.svg'){
        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(homeImage)
        res.end()
    }
    //logic
    else if(url === '/browser-app.js'){
        res.writeHead(200, {'content-type': 'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write(`<h1>requested page not found</h1>`)
        res.end()
    }
    
    // console.log(req.method)
    // console.log(req.url)
    
})

server.listen(3001)
