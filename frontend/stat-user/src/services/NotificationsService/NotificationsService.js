import BASE_URL from "../../constants.js";
import axios from "axios";

const ENDPOINT = "api/v1/notifications";

class NotificationsService {
    NotificationsGetRequest(query) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    return axios.get(`${BASE_URL}${ENDPOINT}?${query}`, config);
  }
}
export default new NotificationsService();
