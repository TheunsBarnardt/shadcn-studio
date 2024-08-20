import useDesigner from "../hooks/useDesigner"
import FormElementsSidebar from "./FormElementsSidebar"
import PropertiesFormSidebar from "./PropertiesFormSidebar"


const DesignerSidebar = () => {
  const {selectedElement} = useDesigner()
  
  return (
    <aside className='w-[280px] max-w-[280px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-2 bg-background overflow-y-auto h-full'>
      {!selectedElement && <FormElementsSidebar />}
      {selectedElement && <PropertiesFormSidebar />}
    </aside>
  )
}

export default DesignerSidebar