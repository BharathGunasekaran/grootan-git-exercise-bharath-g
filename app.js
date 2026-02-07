function showHome() {
  document.getElementById("content").innerHTML = `
    <h3>Home</h3>
    <p>Welcome to your dashboard.</p>
  `;
}

function showProfile() {
  const user = new UserProfile().getProfile();

  document.getElementById("content").innerHTML = `
    <h3>Profile</h3>
    <p><b>ID:</b> ${user.id}</p>
    <p><b>Name:</b> ${user.name}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Age:</b> ${user.age}</p>
    <p><b>Country:</b> ${user.country}</p>
    <p><b>Skills:</b> ${user.skills.join(", ")}</p>
  `;
}

function showSettings() {
  const settings = new Settings().getSettings();

  document.getElementById("content").innerHTML = `
    <h3>Settings</h3>
    <p><b>Theme:</b> ${settings.theme}</p>
    <p><b>Notifications:</b> ${settings.notifications ? "On" : "Off"}</p>
    <p><b>Language:</b> ${settings.language}</p>
  `;
}
