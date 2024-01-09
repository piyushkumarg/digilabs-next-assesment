"use client";
import React from "react";
import Users from "./Users";
import Update from "./Update";

function Admin() {
 

  return (
    <div className="flex flex-col justify-center items-center py-8 gap-8">
      <div>
        <h1 className="text-4xl font-semibold">Admin Section</h1>
      </div>
      <Update/>
      <Users/>
    </div>
  );
}

export default Admin;
