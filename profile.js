class UserProfile {
  constructor() {
    this.user = {
      id: 1,
      name: "King",
      email: "king@email.com",
      age: 22,
      country: "India",
      skills: ["JavaScript", "Node.js", "Git"],
      avatar: null
    };
  }

  getProfile() {
    return this.user;
  }

  setAvatar(base64Image) {
    this.user.avatar = base64Image;
  }
}
