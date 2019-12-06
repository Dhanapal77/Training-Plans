import React, { Component } from 'react';  
import ReactTable from "react-table";  
import "react-table/react-table.css"; 
import './App.css';
import data from './data/table.json';
import Workbook from 'react-excel-workbook';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component { 
  render() {
  const columns = [
      { Header: 'ID',accessor: 'id',width: 100},
       { Header: 'Name',accessor: 'name',width: 150},
       { Header: 'Business_unit',accessor: 'Business_unit',width: 150},
       { Header: 'Courses_Joined',accessor: 'Courses_Joined',width: 150},
       { Header: 'Course_name',accessor: 'Course_name',width: 350},
       { Header: 'Course_status',accessor: 'Course_status',width: 150},
       { Header: 'Experience',accessor: 'Experience',width: 150},
       { Header: 'location',accessor: 'location',width: 150},
       { Header: 'email',accessor: 'email',width: 300},
       { Header: 'data',accessor: 'data',width: 150},
       { Header: 'datas',accessor: 'datas',width: 150},
       { Header: 'col',accessor: 'col1',width: 150},
      ]  
    return (  
      

          <div>
            <div id="heading">Focus Fullfillment</div>
            
              <p align= "left"><button id="btn1">Rotation summery</button><button id="btn2" >Demand summary</button><button id="btn3" >Training Plan</button></p>
            
            <div id="table-header" >Training view
            </div>
            <p >
            <Workbook filename="example.xlsx" element={<div id="download"><button className="btn btn-outline-success">Download</button></div>}>
      <Workbook.Sheet data={data} name="Sheet A">
        <Workbook.Column label="ID" value="id"/>
        <Workbook.Column label="Name" value="name"/>
        <Workbook.Column label="Business_unit" value="Business_unit"/>
        <Workbook.Column label="Courses_Joined" value="Courses_Joined"/>
        <Workbook.Column label="Course_name" value="Course_name"/>
        <Workbook.Column label="Course_status" value="Course_status"/>
        <Workbook.Column label="Experience" value="Experience"/>
        <Workbook.Column label="location" value="location"/>
        <Workbook.Column label="email" value="email"/>
        <Workbook.Column label="data" value="data"/>
        <Workbook.Column label="datas" value="datas"/>
        <Workbook.Column label="col" value="col1"/>
        </Workbook.Sheet>
      </Workbook>
      </p>
      <div className="table"> 
          <ReactTable
              
                  data={data}
                  columns={columns}  
                  defaultPageSize = {5}  
                  pageSizeOptions = {[4,5,10]}
                  className="-striped -highlight"
                  style={
                    {
                      margin: "auto",
                      textAlign: "center",
                      width: "1200px",
                      height: "400px",
                      border: "3px solid grey"
                    }
                  } 
              />
              <footer></footer>
              </div>  
              </div>
          
    );
                }  }
 
export default App;