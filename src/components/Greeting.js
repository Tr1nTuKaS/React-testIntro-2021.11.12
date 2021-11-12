import { useState } from "react";

function Greeting({ title }) {
  // state = isLoggedIn => false
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // <p>We now how to test now</p> == false
  // <p>Do we really, really? </p> == true
  const toggleHandler = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <h1>{title}</h1>
      <h2>Hello World!</h2>

      {!isLoggedIn && <p>We now how to test now</p>}
      {/* <p>We now how to test now</p> */}
      {isLoggedIn && <p>Do we really, really? </p>}
      <button onClick={toggleHandler}>Toggle</button>
    </>
  );
}

export default Greeting;
