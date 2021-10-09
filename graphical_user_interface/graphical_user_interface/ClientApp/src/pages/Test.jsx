import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

function Test() {
  const history = useHistory();
  const [count, setCount] = useState(0);
  useEffect(() => {
    alert("Noodles");
    return () => {};
  }, [count]);

  const [number, setNumber] = useState(0);

  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ourobjects = [
    { name: "Jhon", number: [1, 2, 3] },
    { name: "Dave", number: [2, 2, 3] },
    { name: "Karyn", number: [1, 2, 5] },
  ];
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Noodles {count}
      </button>
      <table>
        <tr>
          <td>Name</td>
          <td>Numbers</td>
        </tr>
        {ourobjects.map((q) => {
          return (
            <tr>
              <td>{q.name}</td>
              <td>
                <button
                  onClick={() => {
                    setNumber(0);
                    alert(`this is a test: ${q.number} number`);
                    history.push(`/${q.number}`);
                  }}
                >
                  {q.number}
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default Test;
