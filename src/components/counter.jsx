import React from "react";
import { useState } from "react";

/*Function for getting Counter Attributes (Specifically whether the counter is Yellow or Blue):*/
function getBadgeClasses(countVal) {
  let classes = "badge m-2 badge-";
  classes += countVal === 0 ? "warning" : "primary";
  return classes;
}

/*Function for displaying the word "Zero" when the counter is at 0, instead of just the number:*/
function formatCount(countVal) {
  return countVal === 0 ? "Zero" : countVal;
}

/*Function for Rendering the Tags in a List (Assuming they Exist):
function renderTags() {
  if (data.tags.length === 0) return <p>There are no tags!</p>;
  return (
    <ul>
      {data.tags.map(tag => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}*/

//Re-Writing the Counter as a "Class" instead of a Function:
/*class Counter extends Component {
  state = { 
    countUnique: 0
   }
   
  render() { 
    return (  );
  }
}
 
export default Counter;*/

/*Function for the actual "Shopping Cart" style Counter:*/
function Counter() {
  let [countUnique, setCountUnique] = useState(0);

  if (countUnique < 0) {
    countUnique = 0;
    console.log("Count cannot be Negative!");
  }

  return (
    <div>
      <div style={styles} className={getBadgeClasses(countUnique)}>
        {formatCount(countUnique)}
      </div>
      <button
        onClick={() => setCountUnique(countUnique + 1)}
        style={styles}
        className="btn btn-secondary btn-sm m-2"
      >
        +
      </button>
      <button
        onClick={() => setCountUnique(countUnique - 1)}
        style={styles}
        className="btn btn-secondary btn-sm m-2"
      >
        -
      </button>
    </div>
  );
}

/*Style Information and Variables:*/
let styles = {
  fontSize: 20,
  fontWeight: "bold"
};

export default Counter;
