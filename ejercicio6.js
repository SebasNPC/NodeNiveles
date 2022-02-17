const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/calculaiva/', (req, res) => {
    const numero = Number(req.query.number)
    const resultado = numero * (21/100)
    const cadena = `el iva es ${resultado}`
    res.send(cadena)

})

app.all('/', (req, res) => {
    res.send(`<p>Copia y pega:
            <br>localhost:5000/calculaiva/?numero=100
            <br> en la barra de direcciones</p>
            <br><br> Cambia el valor de los euros y comprueba su funcionamiento`)
})

app.listen(5000, () => console.log('Server ready on localhost:5000'))