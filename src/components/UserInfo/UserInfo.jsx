import React from 'react';

/**
 * Renders user information from a single 'user' object prop.
 *
 * @param {object} props - The component props.
 * @param {object} props.user - The object containing user data (e.g., { name, email }).
 * @returns {JSX.Element} The rendered user information.
 */
export const UserInfo = ({ user }) => {
  // Check if the 'user' object exists and is not null before trying to access its properties.
  if (!user) {
    return <p>No user data provided.</p>;
  }

  return (
    <div className="user-info-card">
      <h3>User Information</h3>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      {/* You can add more fields like user.id, user.location, etc. */}
    </div>
  );
};

export default UserInfo;