import { Tabs } from "./Tabs";
import { Tab } from "./Tab";
import { TabList } from "./TabList";
import { TabPanel } from "./TabPanel";
import { TabPanels } from "./TabPanels";

export default function TabsMain() {
	return (
		<Tabs>
			<TabList>
				<Tab index={0}>Tab 1</Tab>
				<Tab index={1}>Tab 2</Tab>
				<Tab index={2}>Tab 3</Tab>
			</TabList>
			<TabPanels>
				<TabPanel>Content for Tab 1</TabPanel>
				<TabPanel>Content for Tab 2</TabPanel>
				<TabPanel>Content for Tab 3</TabPanel>
			</TabPanels>
		</Tabs>
	)
}