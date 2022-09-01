import http from "../http-common";

class DoctorDataService {
  static logInDoctor(data) {
    return http.post('/doctors/log-in', data)
  }

  static createBooking = (data) => {
    return http.post('/doctors/new', data);
  }

  // Stock management functions 
  static createNewStock(data) {
    return http.post('/store/add-item', data)
  }

  static getAllStock = (page = 1) => {
    return http.get(`/store/managestock?page=${page}`);
  }

  static deleteStock(productName) {
    return http.delete(`/store/deletestock/${productName}`);
  }

}

export default DoctorDataService;