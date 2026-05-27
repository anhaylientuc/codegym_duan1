import Dropdown from 'react-bootstrap/Dropdown';

function DropDow({listTable, currentTable, selectTable}) {
  return (
    <Dropdown>
      <Dropdown.Toggle
      style={{
        border:"0.5px solid rgb(0, 0, 0,0.2)"
        
      }}
      variant="light" id="dropdown-basic">
        {currentTable.name}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {listTable?.map((item,index)=>(
            <Dropdown.Item
            onClick={()=>{
                const data={
                    id:item.id,
                    name:item.name
                }
                selectTable(data)
            }}
            href="#/action-1">{item.name}</Dropdown.Item>
        ))}
        

      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDow;