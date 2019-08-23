import axios from "axios";

const instance = axios.create({
  baseURL: "https://burgerbuilder-dcc6f.firebaseio.com/"
});

export default instance;
