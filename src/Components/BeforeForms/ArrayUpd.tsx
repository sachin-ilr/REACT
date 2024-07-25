// This is the demo of, updating arrays and array of objects.

import { useState } from "react";

// function ArrayUpd() {
//   const [tags, setTags] = useState(["happy", "cheerful"]);

//   const handleClick = () => {
//     //Add
//     setTags([...tags, "exciting"]);

//     //Remove
//     setTags(tags.filter((tag) => tag !== "happy"));

//     //Update
//     setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click Me</button>
//     </div>
//   );
// }

// export default ArrayUpd;

//=================================================================================

// This de the demo for updating array of Objects:

function ArrayUpd() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
    // console.log(bugs);
  };

  return (
    <div>
      {/* <p>{console.log(bugs)}</p> */}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ArrayUpd;
