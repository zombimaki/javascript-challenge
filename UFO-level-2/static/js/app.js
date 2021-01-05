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
button.on("click", runFilter);

// date filter function
function runFilter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Clear the body
    tbody.html("");

    // Select the input elements and get the raw HTML node
    var inputDate = d3.select("#datetime");
    var inputCity = d3.select("#city");
    var inputState = d3.select("#state");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#shape");

    // Get the datetime value property of the input element
    var inputDateValue = inputDate.property("value");
    var inputCityValue = inputCity.property("value").toLowerCase();
    var inputStateValue = inputState.property("value").toLowerCase();
    var inputCountryValue = inputCountry.property("value").toLowerCase();
    var inputShapeValue = inputShape.property("value").toLowerCase();
    
    // filter the table data where the input values exists
    var filteredData = tableData;

    if (inputDateValue) {
        filteredData = filteredData.filter(ufoSighting => ufoSighting.datetime === inputDateValue);
    }

    if (inputCityValue) {
        filteredData = filteredData.filter(ufoSighting => ufoSighting.city === inputCityValue);
    }

    if (inputStateValue) {
        filteredData = filteredData.filter(ufoSighting => ufoSighting.state === inputStateValue);
    }

    if (inputCountryValue) {
        filteredData = filteredData.filter(ufoSighting => ufoSighting.country === inputCountryValue);
    }  
   
    if (inputShapeValue) {
        filteredData = filteredData.filter(ufoSighting => ufoSighting.shape === inputShapeValue);
    }
                                        

    // Loop Through the filtered ufo sighting data and append it to the table
    filteredData.forEach(function(filteredUFO) {

    var row = tbody.append("tr");
    Object.entries(filteredUFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

}


