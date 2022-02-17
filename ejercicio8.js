const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.post('/calculaedad/', (req, res) => {
    const edad = Number(req.query.edad)
    if (edad >= 18) {
        res.send('Mayor de edad, puedes pasar')
    }else{
        res.send('Menor de edad, acceso denegado')
    }
})

app.listen(5000, () => console.log('Server ready on localhost:5000'))