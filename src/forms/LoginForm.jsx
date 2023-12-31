import { useState } from "react";

export default function LoginForm({ baseUrl }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(formData);
      const response = await fetch(baseUrl + "login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log(response);
      } else console.log("error");
    } catch (e) {
      console.log("error", e);
    }
  };

  const logout = async () => {
    await fetch(baseUrl + "logout.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      rememberMe: checked,
    }));
  };
  return (
    <>
      <h2>Login</h2>
      <form id="login-form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="login-username">Email address</label>
        </div>
        <div>
          <input
            type="pastext"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label htmlFor="login-password">Password</label>
        </div>
        <div>
          <label>Remember Me</label>
          <input
            type="checkbox"
            value={formData.rememberMe}
            onChange={handleChange}
          />
        </div>
        <div id="error-message">
          <span>Invalid email or password</span>
        </div>

        <div id="db-error-message">
          <span>Server error please try again</span>
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={logout}>Logout</button>
    </>
  );
}
