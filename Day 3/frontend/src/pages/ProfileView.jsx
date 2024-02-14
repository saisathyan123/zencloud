import React, { useState } from "react";

const ProfileView = ({ profileData, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({ ...profileData });

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save edited data and exit editing mode
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="profile-view-container">
      <h2>Your Profile Details:</h2>

      {isEditing ? (
        <>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={editedData.name}
              onChange={handleChange}
            />
          </label>

          <label>
            Username:
            <input
              type="text"
              name="username"
              value={editedData.username}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={editedData.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              maxLength="13"
              value={editedData.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Address:
            <textarea
              name="address"
              value={editedData.address}
              onChange={handleChange}
            />
          </label>

          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <p>Name: {profileData.name}</p>
          <p>Username: {profileData.username}</p>
          <p>Email: {profileData.email}</p>
          <p>Phone: {profileData.phone}</p>
          <p>Address: {profileData.address}</p>

          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default ProfileView;
