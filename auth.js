const Auth = {
  login(username, password) {
    const savedPass = localStorage.getItem("password") || "1234";

    if (username === "admin" && password === savedPass) {
      localStorage.setItem("loggedIn", "true");
      return true;
    }
    return false;
  },

  logout() {
    localStorage.removeItem("loggedIn");
  },

  isLoggedIn() {
    return localStorage.getItem("loggedIn") === "true";
  }
};
