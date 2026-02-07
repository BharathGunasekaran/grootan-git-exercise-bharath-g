class Settings {
  constructor() {
    this.options = {
      theme: "Light",
      notifications: true,
      language: "English"
    };
  }

  getSettings() {
    return this.options;
  }
}
