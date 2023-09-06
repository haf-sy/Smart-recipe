import React from 'react';
 

function UserProfile() {
  // Sample user data (replace with your actual data)
  const user = {
    username: 'Temsbaby',
    name: 'Tems Baby',
    email: 'tems@example.com',
    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCri7CbQbPpgdC6Wxuj9cpamW6EB8d5MpmnA&usqp=CAU', // URL to user's profile picture
  };

  return (
    <div className="user-profile">
      <div className="profile-header">
        <img className="avatar" src={user.avatar} alt="User Avatar" />
        <h1 className="name">{user.name}</h1>
        <p className="username">@{user.username}</p>
      </div>
      <div className="profile-details">
        <h2>Profile Details</h2>
        <p>Email: {user.email}</p>
        {/* Add more user details here */}
      </div>
    </div>
  );
}

export default UserProfile;
