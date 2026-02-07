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
  protect(() => {
    const s = settingsInstance.getSettings();

    content.innerHTML = `
      <h3>Settings</h3>
      <p>Theme: ${s.theme}</p>
      <p>Notifications: ${s.notifications}</p>
      <p>Language: ${s.language}</p>

      <h4>Change Password</h4>
      <input type="password" id="oldPass" placeholder="Old Password"><br><br>
      <input type="password" id="newPass" placeholder="New Password"><br><br>
      <button onclick="updatePassword()">Change Password</button>
    `;
  });
}


function updatePassword() {
  const oldP = oldPass.value;
  const newP = newPass.value;

  const result = settingsInstance.changePassword(oldP, newP);

  alert(result.message);
}
