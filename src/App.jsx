import { useEffect, useState } from "react";
const data = ["kiwi", "pineapple", "mango"];
export function App() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    setTimeout(() => setFruits([...data]), 5000);

    return () => {
      setFruits([]);
    }
  }, [])
  return (
    <>
      <div id="container">
        <h1>List of fruits: </h1>
        {fruits.length === 0 ? <div style={{ color: "light gray" }}> Loading... </div> : null}
        <div style={{ color: "light gray" }}>{fruits.map((fruit, index) => <li key={index}>{fruit}</li>)}</div>
      </div>
    </>
  )
}

export default App;
