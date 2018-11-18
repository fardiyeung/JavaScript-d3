// from data.js
var tableData = data;

// // tableData.forEach(row=>console.log(row));
// // YOUR CODE HERE!
var table_body=d3.select('tbody');

// appends a table to your web page and then 
// adds new rows of data for each UFO sighting.

tableData.forEach(function(let){
    var row=table_body.append('tr');    
    Object.entries(let).forEach(function([key,value]){
        // console.log(key,value);
        // var cell=row.append('td');
        // cell.text(value);
        row.append('td').text(value);
    });       
})


// Use a date form in your HTML document and write JavaScript 
// code that will listen for events and search through 
// the `date/time` column to find rows that 
// match user input.
var inputfield=d3.select("#datetime"); 
     


var button=d3.select("#filter-btn");
button.on("click", function() {
    d3.event.preventDefault();
    // console.log("Hi, a button was clicked!");
    var filter_date=inputfield.property('value');
    
    // // console.log(d3.event.target);
    var tr = d3.select("tbody").selectAll("tr");
    tr.remove()


    var filterData = tableData.filter(function(record) {
                     return  record.datetime==filter_date });
                    //  console.log(filterData);

    filterData.forEach(let=>{
            var row=d3.select('tbody').append('tr');
            Object.entries(let).forEach(([key,value])=>{
                    // console.log(key,value);
                    row.append('td').text(value);
            });
    });
                 
});