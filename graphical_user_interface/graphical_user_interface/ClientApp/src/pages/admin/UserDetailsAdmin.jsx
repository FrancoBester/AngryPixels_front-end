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
  const [search_value, setSearch] = useState('');

  function HandleTableInfo(e){
    setTableInfo(e)
  }

  useEffect(() =>{
    var onSuccess = (e) =>{
      HandleTableInfo(e.data)
    };
    API.APIGET(
      "Users/GetAdminLoadPageData",
      onSuccess,
      () => {},
      () => {}
    )
    return () => {};
  }, [updated])


  function searchClick(){
    var onSuccess = (e) =>{
      HandleTableInfo(e.data)
    };
    API.APIGET(
      "Users/SearchLoadPageData?search=" + search_value+ "",
      onSuccess,
      () => {},
      () => {}
    )
  }

  function clearCLick(){
    document.getElementById("userSearch").value = "";
    var onSuccess = (e) =>{
      HandleTableInfo(e.data)
    };
    API.APIGET(
      "Users/GetAdminLoadPageData",
      onSuccess,
      () => {},
      () => {}
    )
  }

  return (
    <div >
      <header >User Information</header>
      <main>
        <h2>Search</h2>
        <input id="userSearch" type="text" onChange={event => setSearch(event.target.value)}></input>
        <button id="btnSearch" onClick={searchClick}>Search</button>
        <button id="btnClear" onClick={clearCLick}>Clear</button>
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
  )
}

export default App;