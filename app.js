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
  `;
}

function uploadAvatar(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();

  reader.onload = function (e) {
    const base64Image = e.target.result;

    profileInstance.setAvatar(base64Image);

    document.getElementById("avatarPreview").src = base64Image;
  };

  reader.readAsDataURL(file);
}

function showSettings() {
  document.getElementById("content").innerHTML = `
    <h3>Settings</h3>
    <p>Settings page coming soon...</p>
  `;
}
