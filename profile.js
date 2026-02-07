class UserProfile {
  constructor() {
    this.user = {
      id: 1,
      name: "King",
      email: "king@email.com",
      age: 22,
      country: "India",
      skills: ["JavaScript", "Node.js", "Git"]
    };
  }

  getProfile() {
    return this.user;
  }
}
