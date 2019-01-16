const http = require('http')
const port = 3000

const requestHandler = (request, response) => {
  console.log(request.url)
  response.end('Hello from k8s!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('error happened:', err)
  }

  console.log(`server is listening on ${port}`)
})

