const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gracy API 명세서',
      version: '1.0.0'
    },
    server: [
      {
        url: 'http://localhost:8080'

      }
    ]
  },
  apis: ['./app.js', './routes/*.js']
}

module.exports = options
