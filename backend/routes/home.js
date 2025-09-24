import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
	res.send('Hello World from home route!');
})

export default router
