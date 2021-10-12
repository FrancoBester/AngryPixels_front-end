import React, {useEffect, useState} from "react";
import './ViewQueries.css';
import API from "../../API";
import { useHistory } from 'react-router';

function ViewQueries() {

    const history =useHistory();
    const [updated, setUpdated] = useState(1);
    const tableHeadings = ["Query ID", "Client Name", "Query Level", "Query Code", "Query Title"]
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
        };
        API.APIGET(
            "Queries/SearchAllUserQueries" + SearchValue+ "",
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
            <header>View Queries</header>
            <main>
                <label>Search</label>
                <input id="querySearch" type="text" onChange={event => setSearchValue(event.target.value)}></input>
                <button id="btnSearchQueries" onClick={searchQuery}>Search</button>
                <button id="btnClearQuerySearch" onClick={clearSearch}>Clear</button>
            </main>
            <div className="userQueryTable">
                <table>
                    <tbody>
                        <tr className="tblQueryHeading">
                            {tableHeadings.map((t) => {
                                return(
                                    <td key={t} style={{border: '1px solid black'}}>{t}</td>
                                );
                            })}
                        </tr>
                    </tbody>
                    <tbody>
                        {Object.keys(TableInfo).map((i) => {
                            return(
                                <tr>
                                    <td>{TableInfo[i].query_Id}</td>
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
        </div>
        </>
    )
}

export default ViewQueries
