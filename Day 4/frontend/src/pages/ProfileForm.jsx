// ProfileForm.js
import { useState } from "react";

const ProfileForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Password (at least 8 characters with a combination of uppercase letters,
        lowercase letters, numbers, and symbols):
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Phone (up to 13 characters):
        <input
          type="tel"
          name="phone"
          maxLength="13"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Address:
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;
