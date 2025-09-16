import { useState } from "react";
import { TabsContext } from "./Context/TabsContext";

type TabsProps={
	children: React.ReactNode
}

export const Tabs = ({children}: TabsProps)=>{
	const [active, setActive] = useState(0);

	return (
		<TabsContext.Provider value={{active, setActive}}>
			{children}
		</TabsContext.Provider>
	)
}