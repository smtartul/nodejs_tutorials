const http = require('http')

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case '/':
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write('<h2> ANA SAYFA </h2>')
            break;
        case '/about':
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write('<h2>HAKKINDA SAYFASI</h2>')
            break;
        case '/contact':
            res.writeHead(200,{'Content-Type': 'text/html'})
            res.write('<h2>ILETISIM SAYFASI</h2>')
            break;
        default:
            res.writeHead(404,{'Content-Type': 'text/html'})
            res.write('<h2>404 SAYFA BULUNAMADI</h2>')
            break;
    }

    
    res.end();
})

const port = 5000;

server.listen(port, () => {
    console.log(`Sunucu port ${port} üzerinde başlatıldı!`);
})