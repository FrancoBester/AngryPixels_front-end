import React, {useEffect, useState} from "react";
import './ViewQueries.css';
import API from "../../API";
import { useHistory } from 'react-router';

function ViewQueries() {

    const history =useHistory();
    const [updated, setUpdated] = useState(1);
    const tableHeadings = ["Client Name", "Query Level", "Query Code", "Query Title"]
    const [TableInfo, setTableInfo] = useState({});
    const [SearchValue, setSearchValue] = useState('');

    function HandleTableInfo(e){
        setTableInfo(e)
    }

    useEffect(() => {
        var onSuccess = (e) =>{
            HandleTableInfo(e.data)
        };
        API.APIGET(
            "Queries/GetAllQueries",
            onSuccess,
            () => {},
            () => {}
        )
        return () => {};
    }, [updated])

    function searchQuery(){
        var onSuccess = (e) =>{
            HandleTableInfo(e.data)
            alert('search')
        };
        API.APIGET(
            "Queries/SearchAllUserQueries?search=" + SearchValue+ "",
            onSuccess,
            () => {},
            () => {}
        )
    }

    function clearSearch(){
        document.getElementById("querySearch").value = "";
        var onSuccess = (e) =>{
            HandleTableInfo(e.data)
        };
        API.APIGET(
            "Queries/GetAllQueries?search",
            onSuccess,
            () => {},
            () => {}
        )
    }

    return (
        <>
        <div className="ViewQueriesGrid">
            <header className="ViewQueriesHeader">View Queries</header>
            <main className="viewQueriesMain">

                <div className="rowSearchQueries">
                    <div className="colQueryLeft">
                        <label>Search</label>
                    </div>
                    <div className="colQueryRight">
                        <input id="querySearch" type="text" onChange={event => setSearchValue(event.target.value)}></input>
                    </div>
                </div>
            </main>   
                <div className="viewQueriesBtns">
                    <button className="btnSearchQueries" id="btnSearchQueries" onClick={searchQuery}>Search</button>
                    <button className="btnClearQueriesSearch" id="btnClearQuerySearch" onClick={clearSearch}>Clear</button>
                </div>
            
            <div className="userQueryTable">
                <table>
                    <tbody>
                        <tr className="tblQueryHeading">
                            {tableHeadings.map((t) => {
                                return(
                                    <td key={t} >{t}</td>
                                );
                            })}
                        </tr>
                    </tbody>
                    <tbody>
                        {Object.keys(TableInfo).map((i) => {
                            return(
                                <tr>
                                    
                                    <td>{TableInfo[i].user_Name}</td>
                                    <td>{TableInfo[i].query_Level}</td>
                                    <td>{TableInfo[i].query_Code}</td>
                                    <td>{TableInfo[i].query_Title}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            <div className="btnBackAdminDash">
            <button
              className="btnBackAdmin"
              onClick={() => {
                history.push("/Admin");
              }}
            >
              Cancel
            </button>
            </div>
        </div>
        </>
    )
}

export default ViewQueries
