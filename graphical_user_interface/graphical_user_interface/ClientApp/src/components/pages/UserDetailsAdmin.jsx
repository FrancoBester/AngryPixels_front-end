import { data, event } from "jquery";
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router";
import API from "../../API";
import styled from "styled-components";

function App(){
  const history = useHistory();
  const [updated, setUpdated] = useState(1);
  const table_headings =["Id","Name","Surname","Policy","Role"]
  const [table_info, setTableInfo] = useState({}) ;
  const table_data = []

  function HandleTableInfo(e){
    setTableInfo(e)
  }

  function load_Data() {
    var body = document.body
    body.appendChild(document.createElement('p'))
  }

  useEffect(() =>{
    var onSuccess = (e) =>{
      HandleTableInfo(e.data)
      // table_data = e.data;
      console.log(e.data)
    };
    API.APIGET(
      "Users/GetAdminLoadPageData",
      onSuccess,
      () => {},
      () => {}
    )
    return () => {};
  }, [updated])


  function searchClick(){}

  function clearCLick(){}

  // load_Data();

  return (
    <div >
      <header >User Information</header>
      <main>
        <h2>Search</h2>
        <input id="userSearch" type="text"></input>
        <button id="btnSearch" onClick={searchClick}>Search</button>
        <button id="btnClear" onClick={clearCLick}>Clear</button>
      </main>
      <table style={{width:"1000px"}}>
        <tbody>
        <tr>
          {table_headings.map((t) => {
            return (
              <td key={t} style={{border:'1px solid black'}}>{t}</td>
            );
            })}
        </tr>
        </tbody>
        <tbody>
        {Object.keys(table_info).map((i) => {
          return (
            <tr>
              <td>{table_info[i].userId}</td>
              <td>{table_info[i].firstName}</td>
              <td>{table_info[i].lastName}</td>
              <td>{table_info[i].policyName}</td>
              <td>{table_info[i].roleName}</td>
            </tr>
          )
        }
        )}
        </tbody>
      </table>
    </div>
  );
}

export default App;