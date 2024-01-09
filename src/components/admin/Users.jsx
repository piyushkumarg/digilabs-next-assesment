"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  // Fetch all users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get("/api/user");
        setUsers(data.users || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col  items-center gap-2 bg-gray-200 min-w-[50vw] p-8 rounded-md ">
      <h1 className="text-2xl font-medium">All Users</h1>
      <div className="flex flex-col justify-start">
        {users.map((user, i) => (
            <div className="flex gap-2">
        <p>{i+1}.</p>
          <p key={user._id}>{user.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
