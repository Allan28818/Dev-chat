import axios from "axios";

const connection = axios.create({ baseURL: "http://localhost:2021" });

export default connection;