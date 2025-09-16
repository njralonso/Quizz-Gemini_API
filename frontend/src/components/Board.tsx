export default function Board({children}: {children: React.ReactNode}) {

	return (
		<>
			<div className="border border-gray-300 rounded p-4 shadow-md max-w-2xl mx-auto mt-96 flex gap-4">
				{children}
			</div>
		</>
	)
}