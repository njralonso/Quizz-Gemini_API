import router from 'express';
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: "AIzaSyDrsofyo2oXv9Y2qmAYIWU_ArKBaPpTn2Y" });

async function main(query) {
	console.log("querymain function", query);
	const response = await ai.models.generateContent({
		model: "gemini-2.5-flash-lite",
		contents: `${query}; dame el nombre del juego, la pregunta y las respuestas sobre lo anterior al ";". Responde en formato json, con las claves "title, para el nombre del juego, description para la pregunta, options para las opciones de la respuesta, deben ser máximo 4 y solo una correcta.`,
	});
	console.log(response.text);
};

export const geminiHandler = (req, res) => {
	res.send("geminihandler",req.params);
	const query = req.query.query;
	console.log("gemini",req.query.query);

	main(query)
}

export default router