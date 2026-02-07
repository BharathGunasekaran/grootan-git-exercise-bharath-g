const profileInstance = new UserProfile();

function showHome() {
  document.getElementById("content").innerHTML = `
    <h3>Home</h3>
    <p>Welcome to your dashboard.</p>
  `;
}

function showProfile() {
  const user = profileInstance.getProfile();

  document.getElementById("content").innerHTML = `
    <h3>Profile</h3>

    <img id="avatarPreview"
         src="${user.avatar || 'https://via.placeholder.com/120'}"
         width="120"
         style="border-radius:50%; border:1px solid #ccc"/>

    <br/><br/>
    <input type="file" onchange="uploadAvatar(event)" />

    <p><b>Name:</b> ${user.name}</p>
    <p><b>Email:</b> ${user.email}</p>
    <p><b>Age:</b> ${user.age}</p>
    <p><b>Country:</b> ${user.country}</p>
    <p><b>Skills:</b> ${user.skills.join(", ")}</p>

    <button onclick="editProfile()">Edit Profile</button>
  `;
}

function editProfile() {
  const user = profileInstance.getProfile();

  document.getElementById("content").innerHTML = `
    <h3>Edit Profile</h3>

    <img id="avatarPreview"
         src="${user.avatar || 'https://via.placeholder.com/120'}"
         width="120"
         style="border-radius:50%; border:1px solid #ccc"/>

    <br/><br/>
    <input type="file" onchange="uploadAvatar(event)" /><br/><br/>

    Name: <input id="name" value="${user.name}"/><br/><br/>
    Email: <input id="email" value="${user.email}"/><br/><br/>
    Age: <input id="age" value="${user.age}"/><br/><br/>
    Country: <input id="country" value="${user.country}"/><br/><br/>
    Skills (comma separated): 
    <input id="skills" value="${user.skills.join(", ")}"/><br/><br/>

    <button onclick="saveProfile()">Save</button>
    <button onclick="showProfile()">Cancel</button>
  `;
}

function saveProfile() {
  const user = profileInstance.getProfile();

  user.name = document.getElementById("name").value;
  user.email = document.getElementById("email").value;
  user.age = document.getElementById("age").value;
  user.country = document.getElementById("country").value;
  user.skills = document
    .getElementById("skills")
    .value.split(",")
    .map(s => s.trim());

  showProfile();
}

function uploadAvatar(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    profileInstance.getProfile().avatar = e.target.result;
    document.getElementById("avatarPreview").src = e.target.result;
  };
  reader.readAsDataURL(file);
}

function showSettings() {
  document.getElementById("content").innerHTML = `
    <h3>Settings</h3>
    <p>Settings page coming soon...</p>
  `;
}
