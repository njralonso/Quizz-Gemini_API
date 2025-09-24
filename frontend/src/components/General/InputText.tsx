import type { JSX } from "react";

type InputTextProps = {
	value?: string
	placeholder?: string
	handleChange?: (value: string) => void;
}

export default function InputText({ value, placeholder, handleChange }: InputTextProps): JSX.Element {

	return (
		<input value={value} onChange={(e) => handleChange?.(e.target.value)} type="text" className="border border-gray-300 rounded px-3 py-2 w-full" placeholder={placeholder} />
	)
}