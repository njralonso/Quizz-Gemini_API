import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json())
import { geminiController } from './controllers/geminiController.js';

// Aceptar solicitudes desde un origen específico (por ejemplo, el frontend en http://localhost:3001)
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Cambia esto a la URL de tu frontend
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Métodos permitidos
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Cabeceras permitidas

	// Si la solicitud es preflight (OPTIONS), respondemos directamente con un 204 sin continuar con la ruta
	if (req.method === 'OPTIONS') {
		return res.status(204).end();
	}

	next();
});



app.get('/', (req, res) => {
	console.log('data:', req.query)
	res.send('Hello World!');
	console.log('Hello World!');
});

app.get('/gemini', geminiController)

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
