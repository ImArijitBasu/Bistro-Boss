import React from "react";
import useAuth from "../../Hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth();
  return (
    <div>
      <div>
        {user?.displayName ? (
          <h2 className="text-3xl">Hi , Welcome {user.displayName}</h2>
        ) : (
          "back"
        )}
      </div>
    </div>
  );
};

export default UserHome;
