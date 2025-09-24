type ButtonProps = {
	onClick?: () => void;
}

export default function Button({ onClick }: ButtonProps) {
	return (
		<button onClick={onClick} className="py-2 px-4 bg-blue-500 text-white rounded">START</button>
	)
}