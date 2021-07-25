// npx nodemon calculator.js
// Express Init
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// Express Callback function to trigger request
app.get("/", function(req, res){
  // __dirname  is always the directory in which the currently executing script resides
  res.sendFile(__dirname + "/bmiCalculator.html");
});

// Form submission
app.post("/", function(req, res){
  var weight = parseFloat(req.body.weight); // Parsing decimal number
  var height = parseFloat(req.body.height);

  var bmi = bmiCalculation(weight, height);

  function bmiCalculation(weight, height) {
    var result = Math.round(weight / ((height * height) / 10000).toFixed(2));
    if (result < 18.5) {
      return "Your BMI is: " + result + " you are underweight";
    }
    if (result >= 18.6 && result < 24.9) {
      return "Your BMI is: " + result + " you have a normal weight";
    }
    else {
      return "Your BMI is: " + result + " you are overweight";
    }
    return result;
  };

  res.send(bmi);
});

// Server Hosting
app.listen(3000, function(){
  console.log("Server started on port 3000");
});
