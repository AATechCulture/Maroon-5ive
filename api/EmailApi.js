import axios from "axios";

export default function FlightData(){
    console.log("email sent")
    // const http = "http://localhost:3001"
    const http = " https://2b1e-2600-100c-b218-970d-8df3-333d-f796-97bc.ngrok.io"
    axios
        .get(http)
        .then((response) => {
          console.log(response.data);
        });
}