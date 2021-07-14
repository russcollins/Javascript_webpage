// from data.js
var tableData = data;

var tbody = d3.select("tbody")
 //build table
 function createtable(rawdata){
     tbody.html("")
     rawdata.forEach((sighting)=>{
         var newrow = tbody.append("tr")
         Object.entries(sighting).forEach(([key,value])=>{
             var newvalue=newrow.append("td")
             newvalue.text(value)
         })
     })
 }
 createtable(tableData)
 //filter by date
 function filterbuttonclick(){
     var filterdate = d3.select("#datetime").property("value")
     var filterdata = tableData
     if(filterdate){
         filterdata = filterdata.filter(sighting => sighting.datetime===filterdate)
     }
     createtable(filterdata)
 }

 d3.selectAll("#filter-btn").on("click",filterbuttonclick)