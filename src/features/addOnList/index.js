import { items } from "./mockData";
import Item from "./item";

import { StyledAddOnList } from "./styleAddOnList";

const AddOnList = () => {
  let content = "";

  content = items.map((item) => {
    return <Item data={item} key={item.title}></Item>;
  });

  return <StyledAddOnList>{content}</StyledAddOnList>;
};

export default AddOnList;
