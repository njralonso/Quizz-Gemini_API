import { useTabs } from "./Context/TabsContext";

export const Tab = ({ children, index }: { children: React.ReactNode; index: number }) => {
  const { active, setActive } = useTabs()

  return (
    <button
      style={{
        fontWeight: active === index ? "bold" : "normal",
      }}
      onClick={() => setActive(index)}
    >
      {children}
    </button>
  )
}