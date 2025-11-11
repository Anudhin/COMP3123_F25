import React, { useState } from "react";

function UserForm() {
  const INITIAL_USER_DATA = { username: "", email: "", password: "", role: "" };
  const [userData, setUserData] = useState(INITIAL_USER_DATA);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
    console.log("User Data Submitted:", userData);
    setUserData(INITIAL_USER_DATA);
  };

  return (
    <div>
      <h2>User Registration Form</h2>
      <form>
        <label>
          Username:
          <input type="text" name="username" placeholder="Enter Username"
                 value={userData.username} onChange={handleFormChange} />
        </label><br />

        <label>
          Email:
          <input type="email" name="email" placeholder="Enter User Email"
                 value={userData.email} onChange={handleFormChange} />
        </label><br />

        <label>
          Password:
          <input type="password" name="password" placeholder="Enter Password"
                 value={userData.password} onChange={handleFormChange} />
        </label><br />

        <label>
          Select Role:
          <select name="role" value={userData.role} onChange={handleFormChange}>
            <option value="">--Select Role--</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
            <option value="viewer">Viewer</option>
          </select>
        </label>

        <button type="submit" onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}

export default UserForm;
