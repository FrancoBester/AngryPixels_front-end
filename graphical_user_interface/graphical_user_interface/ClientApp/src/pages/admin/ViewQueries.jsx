import React, { useEffect, useState } from "react";
import "./ViewQueries.css";
import API from "../../API";
import {useLocation ,Link, useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap"

import POPUP from "../../components/popUp.js";

function ViewQueries() {
  const history = useHistory();
  const [updated, setUpdated] = useState(1);
  const tableHeadings = [
    "Client Name",
    "Query Level",
    "Query Title",
    "Client Details",
    "Query Details",
    "Assign Self",
  ];
  const [TableInfo, setTableInfo] = useState({});
  const [SearchValue, setSearchValue] = useState("");

  const page_number = useLocation().search;
  const [number, setNumber] = useState("")

  function HandleTableInfo(e) {
    setTableInfo(e);
  }

  useEffect(() => {
    const id = new URLSearchParams(page_number).get("pageNumber");
    setNumber(id)
    var onSuccess = (e) => {
      HandleTableInfo(e.data);
    };
    API.APIGET(
      "Queries/GetAllQueries?pageNumber="+ id +"",
      onSuccess,
      () => {},
      () => {}
    );
    return () => {};
  }, [updated]);

  function searchQuery() {
    var onSuccess = (e) => {
      HandleTableInfo(e.data);
    };
    API.APIGET(
      "Queries/SearchAllUserQueries?search=" + SearchValue + "",
      onSuccess,
      () => {},
      () => {}
    );
  }

  function clearSearch() {
    document.getElementById("querySearch").value = "";
    var onSuccess = (e) => {
      HandleTableInfo(e.data);
    };
    API.APIGET(
      "Queries/GetAllQueries?search",
      onSuccess,
      () => {},
      () => {}
    );
  }

  function AssignSelfToQuery(id) {
    var onSuccess = (e) => {
      debugger;
      POPUP.ShowPopUp("Sucsessfully assigned self to query.");
    };
    API.APIPostAnon(
      `Queries/AssignEmployeeToQuery/${sessionStorage.getItem("id")}/${id}`,
      {},
      onSuccess,
      () => {},
      () => {}
    );
  }

  return (
    <>
      <div className="ViewQueriesGrid">
        <header className="ViewQueriesHeader">View Queries</header>
        <main className="viewQueriesMain">
          <div className="rowSearchQueries">
            <div className="colQueryLeft">
              <label>Search:</label>
            </div>
            <div className="colQueryRight">
              <input
                className="searchBoxViewQueries"
                id="querySearch"
                type="text"
                onChange={(event) => setSearchValue(event.target.value)}
              ></input>
            </div>
          </div>
        </main>
        <div className="viewQueriesBtns">
          <button
            className="btnSearchQueries"
            id="btnSearchQueries"
            onClick={searchQuery}
          >
            Search
          </button>
          <button
            className="btnClearQueriesSearch"
            id="btnClearQuerySearch"
            onClick={clearSearch}
          >
            Clear
          </button>

          
        </div>

        

        <div className="userQueryTable">
          <table>
            <tbody>
              <tr className="tblQueryHeading">
                {tableHeadings.map((t) => {
                  return <td key={t}>{t}</td>;
                })}
              </tr>
            </tbody>
            <tbody>
              {Object.keys(TableInfo).map((i) => {
                return (
                  <tr>
                    <td>{TableInfo[i].user_Name}</td>
                    <td>{TableInfo[i].query_Level}</td>
                    <td>{TableInfo[i].query_Title}</td>
                    <td>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to={`ViewClientDetails?id=${TableInfo[i].user_Id}`}
                        >
                          View
                        </NavLink>
                      </NavItem>
                    </td>
                    <td>
                      <NavItem>
                        <NavLink
                          tag={Link}
                          className="text-dark"
                          to={`/ViewSingleQuery?id=${TableInfo[i].query_Id}`}
                        >
                          View
                        </NavLink>
                      </NavItem>
                    </td>
                    <td>
                      <button
                      className="assignBtn"
                        onClick={() => {
                          AssignSelfToQuery(TableInfo[i].query_Id);
                        }}
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="viewQueriesMainPgnt">
            <Pagination>
                <PaginationItem onClick={console.log}>
                  <PaginationLink previous href="" onClick={
                    () => {
                      var new_page = parseInt(number,10) - 1
                      if(new_page < 1){
                        new_page = 1
                      }
                      setNumber(new_page)
                      history.push("/ViewQueries?pageNumber="+new_page+"")
                      window.location.reload()}
                    }>
                  </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="">{number}</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink href="">...</PaginationLink>
                </PaginationItem>

                <PaginationItem>
                  <PaginationLink next href=""onClick={
                    () => {
                      // alert("test")
                      var new_page = parseInt(number,10) + 1
                      // alert(new_page)
                      setNumber(new_page)
                      history.push("/ViewQueries?pageNumber="+new_page+"")
                      window.location.reload()}
                    }>
                  </PaginationLink>
                </PaginationItem>
              </Pagination> 
          </div>

        <div className="btnBackAdminDash">
          <button
            className="btnBackAdmin"
            onClick={() => {
              history.push("Admin?pagenumber=1");
            }}
          >
            Back
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewQueries;
