import axios from "axios";

export default function FlightData(){
    console.log("exporting data")
    axios
        .get("http://172.20.10.6:4000/flights?date=2020-01-01")
        .then((response) => {
          console.log(response.data);
        });
}