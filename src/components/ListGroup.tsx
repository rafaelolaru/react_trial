import { useState } from "react";

interface Item {
  name: string;
  id: number;
}

interface Props {
  items: Item[];
  heading: string;
  onSelectItem: (name: string, id: number) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1); // arr[0] = variable, (selectedIndex)   arr[1] = updater function

  const isEmptyCondition = items.length === 0 && <p>No item found </p>; // 1 && paragraph => paragraph

  return (
    <>
      <h1>{heading}</h1>
      {isEmptyCondition}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item.id}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item.name, item.id);
            }}
          >
            {item.name} {item.id}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
