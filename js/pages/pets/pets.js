var myTemplate = require("./pets.hbs");

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', '../../data/pets-data.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    console.log(data);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

function createHTML(petsData) {
  var petsContainer = document.getElementById("pets-container");
  petsContainer.innerHTML = myTemplate(petsData);
}