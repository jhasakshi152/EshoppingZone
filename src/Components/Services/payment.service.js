import axios from "axios";

const API_URL = "http://localhost:8585/create_order";


class PaymentService {
  initiatePayment(fare) {
    return axios.post(API_URL + "/" + fare);
  }
}

export default new PaymentService();
