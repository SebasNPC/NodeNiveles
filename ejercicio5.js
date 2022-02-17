const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/convierte/', (req, res) => {
    const dolares = Number(req.query.dolares)
    const resultado = dolares * 0.88
    const cadena = `<h2> En euros son: ${resultado} </h2>`
    res.send(cadena)
})

app.all('/', (req, res) => {
    res.send(`<p>Copia y pega:
            <br>localhost:5000/convierte/?dolares=100
            <br> en la barra de direcciones</p>
            <br><br> Cambia el valor de los euros y comprueba su funcionamiento`)
})

app.listen(5000, () => console.log('Server ready on localhost:5000'))