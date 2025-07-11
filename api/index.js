const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors()); // Habilita CORS para todos los orígenes
app.use(express.json()); // Para leer JSON en el body

let tareas = []

app.post('/add', (req, res) => {
  const nueva = { id: Date.now(), ...req.body };
  tareas.push(nueva);
  res.status(201).json(nueva);
});

app.post('/delete', (req, res) => {
  const nueva = {...req.body };
  console.log(nueva)
  tareas = tareas.filter(item => item.id != nueva.id);
  
  res.status(201).json(nueva);
});

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.get('/', (req, res) => {
  res.send('¡Bienvenido a tu API REST!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});