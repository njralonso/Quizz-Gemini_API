import Board from "./components/Board"
import InputText from "./components/General/InputText"
import Button from "./components/General/Button"
import useFetch from "./hooks/useFetch"
import { useState } from "react"


function App() {
	const [query, setQuery] = useState<string>("")
	const [value, setValue] = useState<string>("")
	const { state, fetchData } = useFetch();

	const handleSubmit = () => {
		fetchData(`http://localhost:3000/gemini/?query=${query}`)
	};

	const handleChange = (newValue: string): void => {
		setValue(newValue);
		setQuery(newValue);
		console.log(newValue)
	}

	return (
		<>
			<Board>
				<InputText value={value} placeholder="Introduce algo o k ase" handleChange={handleChange} />
				<Button onClick={handleSubmit} />
			</Board>
		</>
	)
}

export default App;