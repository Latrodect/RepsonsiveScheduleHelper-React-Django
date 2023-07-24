import BASE_URL from "../../constants.js";
import axios from "axios";

const ENDPOINT = "api/v1/trends/";

class TrendsService {
    TrendsServiceGetRequest() {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios.post(`${BASE_URL}${ENDPOINT}`, config);
  }
}
export default new TrendsService();
