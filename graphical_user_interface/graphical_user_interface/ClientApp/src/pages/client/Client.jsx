import React, {useEffect, useState} from "react";
import './Client.css';
import { useHistory } from "react-router";
import API from "../../API";



function Client(){

    const history = useHistory();
    const [updated, setUpdated] = useState(1);
    const tableHeadings =["Title","Assistant Name","Status"]
    const [table_info, setTableInfo] = useState({}) ;

    function HandleTableInfo(e){
        setTableInfo(e)
    }

    useEffect(() => {
        var onSuccess = (e) =>{
            HandleTableInfo(e.data)
        };
        API.APIGET(
            "Queries/GetSpecificUserQueries",
            onSuccess,
            () => {},
            () => {}
        )
        return () => {};
    }, [updated])

    console.log(localStorage.getItem("id"))
    return(
    <>
        <div className="grid-container-client-dashboard">
            
            <header className="clientDashHeader">Client Dashboard</header>
            
            <div className="secondHeader">
                <h2>Please select an action below:</h2>
            </div>

            <main className="topGrid">
                
                <button
                    className="btnViewProfileClient"
                    onClick={() => {
                        history.push("/ViewClientProfile"); //Add path here once a View Profile Page has been created
                    }}   
                >
                    View Profile
                </button>

                <button
                className="btnViewPoliciesClient"
                onClick={() => {
                    history.push("/ViewPolicies");
                }}
                >
                    View Policies
                </button>

                <button
                className="btnNewQueryClient"
                onClick={() => {
                    history.push();
                }}
                >
                    New Query
                </button>
            </main> 
            
            <div className="userQueries">
                <table>
                    <tbody>
                        <tr className="tblUserQueryHeadings">
                            {tableHeadings.map((t) =>{
                                return(
                                    <td key={t} style={{border:'1px solid white'}}>{t}</td>
                                );
                            })}
                        </tr>
                    </tbody>
                    <tbody>
                        {Object.keys(table_info).map((i) => {
                            return(
                                <tr>
                                    <td>{table_info[i].query_Title}</td>
                                    <td>{table_info[i].assistant_Name}</td>
                                    <td>{table_info[i].query_Status}</td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </table>
                <br />
                <label>I DONT KNOW WHY THIS IS NOT WORKING</label>
            </div>   
        </div>
    </>
    );
}

export default Client;
