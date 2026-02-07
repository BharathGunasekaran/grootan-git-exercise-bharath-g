## User Dashboard – Node/JS Demo App

A simple browser-based dashboard application built using JavaScript that demonstrates:

* Authentication (Login / Logout)

* Profile Management

* Avatar Upload

* Edit Profile

* Settings Page

* Change Password

* Git Branch Workflow Practice

This project is mainly for learning Git, Branching, and Basic Frontend Logic.

## Features
### Authentication

* Simple login system
* Logout support
* Route protection (cannot access pages without login)

### Profile

* View profile details
* Edit profile information
* Upload avatar image
* Add Date of Birth
* Skills list support

### Settings

* View user settings
* Change password
* Local storage persistence

### Git Practice

* Feature branches
* Develop branch
* Merge workflow
* Pull Requests

### Project Structure

*   project-folder/
    *   index.html
    *   app.js
    *   profile.js
    *   settings.js
    *   auth.js
    *   README.md

### Technologies Used

* HTML
* CSS (optional styling)
* JavaScript (Vanilla JS)
* LocalStorage (for demo data)
* Git & GitHub

##How to Run

1. Clone the repository

```bash git clone <repo-url>```
2. Open the project folder

3. Open index.html in a browser
(No server required)

### Default Login
```bash Username: admin Password: 1234```


You can change the password from Settings → Change Password.

### Branching Strategy
main
*   develop
    *   features/user-profile
    *   features/settings-page


#### Workflow:

* Create feature branch
* Commit changes
* Merge into develop
* Merge develop into main when stable

### Learning Goals

* Understand Git branching
* Practice merge & pull requests
* Build modular JavaScript files
* Manage UI without frameworks
* Work with local storage

### Future Improvements

* Backend database
* Secure password hashing
* JWT authentication
* Responsive UI
* Dark mode
* User roles

### Disclaimer

This project is for educational purposes only.
Password handling and storage are not secure for production use.

## Author Bharath G
## Date 07/02/2026
