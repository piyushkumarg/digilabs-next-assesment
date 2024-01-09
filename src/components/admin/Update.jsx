import React, { useState, useEffect } from "react";
import axios from "axios";
import { uploadToCloudinary } from "@/utils/cloudinaryUpload";

function Update() {
  const [updateForm, setUpdateForm] = useState({
    logo: "",
    buttonText: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  

  const handleUpdate = async (id, logo, buttonText) => {
    try {
      await axios.put(`/api/update/${id}`, { logo, buttonText });
    } catch (error) {
      console.error("Error updating Update:", error);
    }
  };

  const updateBtnTextInputHandler = (e) => {
    setUpdateForm((pre) => ({ ...pre, buttonText: e.target.value }));
  };

  const uploadImageHandler = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setUpdateForm((pre) => ({ ...pre, logo: file }));
  };

  const onSubmitBtnHandler = async (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);
    const logoImgUrl = await uploadToCloudinary(updateForm?.logo);
    if (logoImgUrl) {
      await handleUpdate(
        "659cdecda5736e24bc4fba4c",
        logoImgUrl,
        updateForm?.buttonText
      );
      setIsLoading(!isLoading);
    } else {
      setIsLoading(!isLoading);
    }
  };

  return (
    <div className="flex flex-col items-center gap-16 bg-gray-200 min-w-[50vw] p-8 rounded-md">
      <div className="flex flex-col justify-start">
        <h1 className="text-2xl font-medium">All Update</h1>
      </div>

      {/* Update Form */}
      <div className="flex flex-col justify-start gap-2 bg-gray-100">
        <h1 className="text-2xl font-medium">All Update Input</h1>
        <form onSubmit={onSubmitBtnHandler}>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <label>Update Logo</label>
              <input
                type="file"
                accept="image/x-png,image/gif,image/jpeg"
                name="logo"
                onChange={uploadImageHandler}
              />
            </div>
            <div className="flex gap-2">
              <label>Update Header Button Text </label>
              <input
                type="text"
                name="buttonText"
                value={updateForm?.buttonText}
                placeholder="Write button text"
                onChange={updateBtnTextInputHandler}
                className="border border-gray-500 rounded focus:outline-none px-1 "
              />
            </div>
            <button
              type="submit"
              className="bg-gray-700 p-2 text-white rounded-md hover:bg-gray-800"
            >
              {isLoading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
        {/* ))} */}
      </div>
    </div>
  );
}

export default Update;
