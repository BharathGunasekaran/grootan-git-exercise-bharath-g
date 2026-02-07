class Auth {
  static login(u, p) {
    if (u === "admin" && p === "1234") {
      localStorage.setItem("loggedIn", "true");
      return true;
    }
    return false;
  }

  static logout() {
    localStorage.removeItem("loggedIn");
  }

  static isLoggedIn() {
    return localStorage.getItem("loggedIn") === "true";
  }
}
