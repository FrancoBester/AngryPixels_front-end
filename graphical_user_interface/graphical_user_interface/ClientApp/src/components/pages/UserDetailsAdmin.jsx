import { data, event } from "jquery";
import React, {useEffect, useState} from "react";
import { useHistory } from "react-router";
import API from "../../API";
import styled from "styled-components";
import './UserDetailsAdmin.css';

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
  <div >{/*STILL BUSY STYLING*/}
      <div className="userDetailsAdminGrid">
      <header className="userInfoHeader">User Information</header>

      <main className="searchUserInfoGrid">
        <label>Search</label>
        <input className="searchUI" id="userSearch" type="text"></input>
        <button className="btnSearchUserInfo" id="btnSearch" onClick={searchClick}>Search</button>
        <button className="btnClearSearchUserInfo" id="btnClear" onClick={clearCLick}>Clear</button>
      </main>
      <div className="userInfoTable">
        <table style={{width:"80%"}}>
          <tbody>
          <tr className="tblHeadingNames">
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
      </div>
  </div>
  );
}

export default App;