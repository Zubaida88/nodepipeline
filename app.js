const port = process.env.PORT || 80
require('http')
  .createServer((req, res) => {
    console.log(`incoming url: ${req.url} and incoming method: ${req.method}`)
    res.writeHeader(200,{'Content-Type': 'text/html'})
    res.write('<p>Technobd</p>')
    res.write('<p>Hello Everybody</p>')
    res.end('<h1>Hello everyone</h1>')
  })
  .listen(port, (error)=>{
    console.log(`server is running on ${port}`)
  })
