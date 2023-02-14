const express = require ('express')
const app = express()

app.get('/', (request, response) => response.send('Hellow laba'))
app.listen(3000, () => console.log('sever ready'))