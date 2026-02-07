class Settings {
  constructor() {
    this.options = {
      theme: "Light",
      notifications: true,
      language: "English"
    };

    // default password
    if (!localStorage.getItem("password")) {
      localStorage.setItem("password", "1234");
    }
  }

  getSettings() {
    return this.options;
  }

  changePassword(oldPass, newPass) {
    const savedPass = localStorage.getItem("password");

    if (oldPass !== savedPass) {
      return { success: false, message: "Old password incorrect" };
    }

    localStorage.setItem("password", newPass);
    return { success: true, message: "Password changed!" };
  }
}
