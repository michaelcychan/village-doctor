import http from "../http-common";

class DoctorDataService {
  static getAllStock = (page = 0) => {
    return http.get(`/doctor/show?page=${page}`);
  }

  static createBooking = (data) => {
    return http.post('/doctors/new', data);
  }

  static logInDoctor(data) {
    return http.post('/doctors/log-in', data)
  }
}

export default DoctorDataService;