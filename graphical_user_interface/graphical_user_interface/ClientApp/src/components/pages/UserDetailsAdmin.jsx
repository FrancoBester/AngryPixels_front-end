import { data, event } from "jquery";
import React from "react";

import styled from "styled-components";


function load_Data() {
  var body = document.body,
        tbl = document.createElement('table')
  tbl.style.width  = '1000px';
  tbl.id = "user_info_table";
  // tbl.style.border = '1px solid black';
  tbl.style.left = '8rem';
  tbl.style.position = "absolute";
  const table_headings =["Id","Name","Surname","Policy","Role"]

  fetch('https://localhost:44376/Users/GetAdminLoadPageData').
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
  
 
  
  
  return (
    <div >
      <header >User Information</header>
      <main>
     
        <h2>Search
          <input id="userSearch" type="text"></input>
        </h2>
      </main>
      <script src="UserDetailsAdmin.js"></script>
    </div>
  );
}



export default load_Data;