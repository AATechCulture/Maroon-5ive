import axios from "axios";

export default function FlightData(){
    console.log("email sent")
    // const http = "http://localhost:3001"
    const http = "https://f55f-2600-100c-b22d-d0f5-cdec-2a36-3355-e67e.ngrok.io"
    axios
        .get(http)
        .then((response) => {
          console.log(response.data);
        });
}