class ApiResponse {
  constructor(statusCode, message, data = null) {
    (this.succes = true),
      (this.statusCode = statusCode),
      (this.message = message),
      (this.data = data);
  }
}

module.exports = ApiResponse;
