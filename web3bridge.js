// create a website that renders a display based on data retrieved
from an external API

// create a function that will retrieve data from the API
// and then render the data to the page
function getAndRenderData() {
    // retrieve data from the API
    $.get("https://jsonplaceholder.typicode.com/users", function(data) {
        // render the data to the page
        renderData(data);
    });
    }



// create a function that will render the data to the page
function renderData(data) {
    // create a variable to hold the html
    var html = "";
    // loop through the data
    for (var i = 0; i < data.length; i++) {
        // create a variable to hold the current object
        var repo = data[i];
        // add the html for the current object to the html variable
        html += "<div class='repo'>";
        html += "<h2>" + repo.name + "</h2>";
        html += "<p>" + repo.description + "</p>";
        html += "</div>";
    }
    // add the html to the page
    $("#repos").html(html);
    }

// call the function to get and render the data
getAndRenderData();


// Language: javascript
