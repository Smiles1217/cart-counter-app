import React from "react";
import Counter from "./counter";

function Counters() {
  return (
    <div className="Cart">
      {data.tags.map(tag => (
        <Counter key={tag.id} />
      ))}
    </div>
  );
}

/*Data Information and Variables:*/
let data = {
  tags: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 }
  ]
};

export default Counters;
