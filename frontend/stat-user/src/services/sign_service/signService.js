import BASE_URL from '../../constants.js'
import axios from 'axios';

const ENDPOINT = 'waspsapi/signin/'

class SignService{
    SignInPostRequest(body){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        return axios.post(`${BASE_URL}${ENDPOINT}`, JSON.stringify(body), config)
    }
}
export default new SignService();