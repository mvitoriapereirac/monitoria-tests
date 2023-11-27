import * as React from "react";
import { FC } from "react";
import Checkbox from "../Checkbox/Checkbox"

interface IList {
  items: {
    id: string;
    value: string;
    // checked: boolean;
    
  }[];
}


const List: FC<IList> = ({
  
  items,
}) => {
const [check, setCheck] = React.useState(false);


  return (
    <ul>
    
      {items.map(({ id, value }) => (
        <li key={id}>
          <Checkbox checked={check} onChange={setCheck} disabled={false} id={""}/>
        
           {value}
          </li>
      ))}
    </ul>
  );
}

export default List;