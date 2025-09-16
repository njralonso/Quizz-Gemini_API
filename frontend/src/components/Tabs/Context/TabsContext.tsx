import { createContext, useContext } from 'react';

type TabsContextType = {
	active: number
	setActive: (index: number) => void
}
export const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const useTabs = () => {
	const context = useContext(TabsContext);
	if (!context) {
		throw new Error('useTabs must be used within a TabsProvider');
	}
	return context;
}; 