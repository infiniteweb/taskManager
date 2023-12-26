import { useState } from "react";

export default function RegisterForm({ baseUrl }) {
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
  );
}
