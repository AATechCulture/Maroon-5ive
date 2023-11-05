import axios from "axios";

export default async function FlightData() {
  console.log("exporting data");
  //const http = "http://172.20.10.6:4000"
  const http = "https://e288-2600-100c-b22d-d0f5-cdec-2a36-3355-e67e.ngrok.io";
  const url = `${http}/flights?date=2020-01-01`;
  console.log(url);

  try {
    const response = await axios.get(url);
    //console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching flight data:", error);
    throw error; // Rethrow the error for the calling code to handle if needed
  }
}