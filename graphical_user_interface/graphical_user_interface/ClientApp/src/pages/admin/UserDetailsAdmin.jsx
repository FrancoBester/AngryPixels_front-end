import React, {useEffect, useState} from "react";
import { useHistory } from "react-router";
import API from "../../API";
import './UserDetailsAdmin.css';
import Footer from '../../components/Footer';


function App(){
  const history = useHistory();
  const [updated, setUpdated] = useState(1);
  const table_headings =["Name","Surname","Policy","Role"]
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
    <>
    <div className="userDetailsAdminGrid">
      <header className="userInfoHeader">User Information</header>
      <main className="searchUserInfoGrid">
        <div className="rowSearch">
          <div className="colLeftSearch">
          <label id="lblSearch">Search:</label>
        </div>
        <div className="colRightSearchBar">
          <input id="userSearch" type="text" for="lblSearch" onChange={event => setSearch(event.target.value)}></input>
          </div>
        </div>
        </main>
        <div className="userDetailsButtons">
          <button className="btnSearchUserDetails" id="btnSearch" onClick={searchClick}>Search</button>
          <button className="btnClearUserDetails" id="btnClear" onClick={clearCLick}>Clear</button>
        </div>
      <div className="userInfoTable">
        <table >
          <tbody>
          <tr className="tblHeadingNames">
            {table_headings.map((t) => {
              return (
                <td key={t} >{t}</td>
              );
              })}
          </tr>
          </tbody>
          <tbody>
          {Object.keys(table_info).map((i) => {
            return (
              <tr>
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

      <div className="backAdminDash">
      <button
              className="btnBackAdmin"
              onClick={() => {
                history.push("/Admin");
              }}
            >
              Back
            </button>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default App;