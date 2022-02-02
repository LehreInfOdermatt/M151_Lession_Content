import {createServer} from 'http';

const server = createServer((req,res)=>{
    let url = new URL(req.url, "http://"+ req.headers.host)
    let name = url.searchParams.get('name')
    let type = url.searchParams.get('type')

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    res.write(`<h1>${name}</h1>`);
    res.write(`<h1>${type}</h1>`);

    res.end('<h2>Hello World</h2>');
});
server.listen(8080, ()=> {
    console.log(
        `Server is listening to http:/localhost.${server.address().port}`
    );
})