import { data, event } from "jquery";
import React from "react";

import styled from "styled-components";

function App(){

  function load_Data(url) {
    var body = document.body,
          tbl = document.createElement('table')
    tbl.style.width  = '1000px';
    tbl.id = "user_info_table";
    // tbl.style.border = '1px solid black';
    tbl.style.left = '8rem';
    tbl.style.position = "absolute";
    const table_headings =["Id","Name","Surname","Policy","Role"]
  
    fetch(url).
      then(response => response.json())
      .then(data => {
        let count = 1
        for(var item in data){
          var details = data[item]
          
          if(count == 1){
            var tr = tbl.insertRow();
            for(var heading in table_headings){
              var td = tr.insertCell();
              td.appendChild(document.createTextNode(table_headings[heading]));
              td.style.border = '1px solid black';
              count = 2
              // console.log(details[info])
            }
          }
          var id = details['userId']
          // console.log(id)
          var tr = tbl.insertRow();
          tr.id = id
          var td = tr.insertCell();
          td.appendChild(document.createTextNode(details['userId'])) 
          var td = tr.insertCell();
          td.appendChild(document.createTextNode(details['firstName'])) 
          var td = tr.insertCell();  
          td.appendChild(document.createTextNode(details['lastName'])) 
          var td = tr.insertCell();
          td.appendChild(document.createTextNode(details['policies'])) 
          var td = tr.insertCell();
          td.appendChild(document.createTextNode(details['roles'])) 
          var td = tr.insertCell();
          td.appendChild(document.createTextNode('Expand')) 
  
          // var input = document.createElement('input')
          // // input.type = 'text'
          // input.value = details['userId']
          // input.style.visibility = 'False'
          // td.appendChild(input);
          // td.onclick = function(){
          //   // console.log(input.value)
          // }
         
          // console.log(details)
  
          body.appendChild(tbl)
        }
      })
  }

  function handleChange(e){
    // load_Data('https://localhost:44376/admissions/getall');
  }

  function searchClick(){
    document.body.removeChild(document.getElementById('user_info_table'))
    var search_value = document.getElementById("userSearch").value;
    load_Data('https://localhost:44376/Users/SearchLoadPageData?search='+search_value);
  }

  function clearCLick(){
    document.body.removeChild(document.getElementById('user_info_table'))
    document.getElementById('userSearch').value = '';
    load_Data('https://localhost:44376/Users/GetAdminLoadPageData');
  }

  load_Data('https://localhost:44376/Users/GetAdminLoadPageData');

  return (
    <div >
      <header >User Information</header>
      <main>
     
        <h2>Search</h2>
        <input id="userSearch" type="text" onChange={handleChange}></input>
        <button id="btnSearch" onClick={searchClick}>Search</button>
        <button id="btnClear" onClick={clearCLick}>Clear</button>
      </main>
      <script src="UserDetailsAdmin.js"></script>
    </div>
  );
}

export default App;