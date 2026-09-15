import axios from "axios";
import { response } from "express";
//const axios = require('axios'); // legacy way

// Make a request for a user with a given ID
axios
  .get("http://localhost:3000/test")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });

// Optionally the request above could also be done as
axios.get("/user", {
  params: {
    ID: 12345,
  },
});
//------------------------------------------------------------------
axios
  .get("http://localhost:3000/users")
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
//------------------------------------------------------------------
// instance.get("/test");
// .then(function{response}{
// var usersArray=response.data.data;
// usersArray.array.forEach(user =>{
//     console.log(user);
// });
// )
// }
// .catch(function(error));
//------------------------------------------------------------------
axios
  .post("/user", {
    firstName: "Fred",
    lastName: "Flintstone",
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
//------------------------------------------------------------------
