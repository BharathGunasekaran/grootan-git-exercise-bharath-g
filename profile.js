class UserProfile {
  constructor() {
    this.user = {
      id: 1,
      name: "King",
      email: "king@email.com",
      age: 22,
      dob: "2003-01-01",
      country: "India",
      skills: ["JavaScript", "Node.js"],
      avatar: null
    };
  }

  getProfile() {
    return this.user;
  }
}
