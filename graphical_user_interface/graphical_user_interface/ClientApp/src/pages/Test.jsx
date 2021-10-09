import React from "react";
import { useHistory } from "react-router";

function Test() {
  const history = useHistory();

  const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ourobjects = [
    { name: "Jhon", number: [1, 2, 3] },
    { name: "Dave", number: [2, 2, 3] },
    { name: "Karyn", number: [1, 2, 5] },
  ];
  return (
    <div>
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
