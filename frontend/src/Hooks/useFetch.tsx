import { useState, useEffect } from 'react';

export type FetchState<T> = {
	data: T | null;
	loading: boolean;
	error: Error | null;
};

export default function useFetch<T>() {
	const [state, setState] = useState<FetchState<T>>({
		data: null,
		loading: true,
		error: null
	});
	
	const fetchData = async (text?:string) => {
		try {
			const response = await fetch(`${text}`);
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			const result = await response.json();
			setState({ data: result, loading: false, error: null });
		} catch (error) {
			setState({
				data: null,
				loading: false,
				error: error instanceof Error ? error : new Error('An unknown error occurred')
			});
		} finally {
			setState(prevState => ({ ...prevState, loading: false }));
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return {state, fetchData};
}