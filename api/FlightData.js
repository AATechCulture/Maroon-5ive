import axios from "axios";

function FlightData(){
    axios
        .get("/airports?code=DFW")
        .then((response) => {
          console.log(response.data);
        });
}