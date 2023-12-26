import { useState } from "react";
import { useEffect } from "react";

export default function LoginPage({ baseUrl }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch(baseUrl + "register.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log(response);
      } else console.log("error");
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      {!loggedIn && (
        <>
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </>
      )}
      {loggedIn && (
        <>
          <h2>Login</h2>
          <form id="login-form">
            <div>
              <input
                type="email"
                id="login-email"
                placeholder="login-username"
                required
              />
              <label htmlFor="login-username">Email address</label>
            </div>
            <div>
              <input
                type="password"
                id="login-password"
                placeholder="login-password"
                required
              />
              <label htmlFor="login-password">Password</label>
            </div>
            <div id="error-message">
              <span>Invalid email or password</span>
            </div>

            <div id="db-error-message">
              <span>Server error please try again</span>
            </div>
          </form>
        </>
      )}
    </>
  );
}
