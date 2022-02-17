const express = require('express')
const app = express()
app.use(express.urlencoded({extended: true}))

app.get('/saludo', (req, res) => {
    const cadena = `Hola! ${req.query.nombre}`
    res.send(cadena)
})

app.all('/', (req, res) => {
        res.send(`<p>Copia y pega:
                  <br>localhost:5000/saludo/?nombre=Matias
                  <br> en la barra de direcciones</p>
                  <br><br> Cambia el nombre por otro y comprueba su funcionamiento
                  `)
});

app.listen(5000, () => console.log('Server ready on localhost:5000'))