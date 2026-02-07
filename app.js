const profileInstance = new UserProfile();
const settingsInstance = new Settings();

// ---------- AUTH ----------

function showLogin() {
  content.innerHTML = `
    <h3>Login</h3>
    <input id="u" placeholder="Username"><br><br>
    <input id="p" type="password" placeholder="Password"><br><br>
    <button onclick="doLogin()">Login</button>
  `;
}

function doLogin() {
  if (Auth.login(u.value, p.value)) showHome();
  else alert("Invalid");
}

function logout() {
  Auth.logout();
  showLogin();
}

function protect(cb) {
  if (!Auth.isLoggedIn()) return showLogin();
  cb();
}

// ---------- HOME ----------

function showHome() {
  protect(() => {
    content.innerHTML = `<h3>Home</h3><p>Welcome!</p>`;
  });
}

// ---------- PROFILE ----------

function showProfile() {
  protect(() => {
    const u = profileInstance.getProfile();
    content.innerHTML = `
      <h3>Profile</h3>

      <img id="avatarPreview"
      src="${u.avatar || 'https://via.placeholder.com/120'}"
      width="120" style="border-radius:50%"><br><br>

      <input type="file" onchange="uploadAvatar(event)"><br><br>

      <p><b>Name:</b> ${u.name}</p>
      <p><b>Email:</b> ${u.email}</p>
      <p><b>Age:</b> ${u.age}</p>
      <p><b>DOB:</b> ${u.dob}</p>
      <p><b>Country:</b> ${u.country}</p>
      <p><b>Skills:</b> ${u.skills.join(", ")}</p>

      <button onclick="editProfile()">Edit</button>
    `;
  });
}

function editProfile() {
  const u = profileInstance.getProfile();
  content.innerHTML = `
    <h3>Edit Profile</h3>

    Name <input id="name" value="${u.name}"><br><br>
    Email <input id="email" value="${u.email}"><br><br>
    Age <input id="age" value="${u.age}"><br><br>
    DOB <input type="date" id="dob" value="${u.dob}"><br><br>
    Country <input id="country" value="${u.country}"><br><br>
    Skills <input id="skills" value="${u.skills.join(",")}"><br><br>

    <button onclick="saveProfile()">Save</button>
    <button onclick="showProfile()">Cancel</button>
  `;
}

function saveProfile() {
  const u = profileInstance.getProfile();
  u.name = name.value;
  u.email = email.value;
  u.age = age.value;
  u.dob = dob.value;
  u.country = country.value;
  u.skills = skills.value.split(",");
  showProfile();
}

function uploadAvatar(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = x => {
    profileInstance.getProfile().avatar = x.target.result;
    avatarPreview.src = x.target.result;
  };
  reader.readAsDataURL(file);
}

// ---------- SETTINGS ----------

function showSettings() {
  protect(() => {
    const s = settingsInstance.getSettings();
    content.innerHTML = `
      <h3>Settings</h3>
      <p>Theme: ${s.theme}</p>
      <p>Notifications: ${s.notifications}</p>
      <p>Language: ${s.language}</p>
    `;
  });
}

// ---------- START ----------

window.onload = () => {
  if (Auth.isLoggedIn()) showHome();
  else showLogin();
};
