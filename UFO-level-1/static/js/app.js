// from data.js
var tableData = data;

// Set table body reference
var tbody = d3.select("tbody");

// Loop Through ufo sighting data and append it to the table
tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});
  
// select the filter button
var button = d3.select("#filter-btn");

// set on click behavior 
button.on("click", runDateFilter);

// date filter function
function runDateFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear the body
    tbody.html("");

    // Select the datetime input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the datetime value property of the input element
    var inputValue = inputElement.property("value");

    // Filter the data on datetime
    var filteredData = tableData.filter(ufoSighting => ufoSighting.datetime === inputValue);

    // Loop Through the filtered ufo sighting data and append it to the table
    filteredData.forEach(function(filteredUFO) {

    var row = tbody.append("tr");
    Object.entries(filteredUFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

}


