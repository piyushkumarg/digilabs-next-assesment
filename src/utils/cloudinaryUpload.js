"use client";
const UPLOAD_PRESENT = process.env.NEXT_PUBLIC_UPLOAD_PRESENT;
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME;

export const uploadToCloudinary = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", UPLOAD_PRESENT);
  data.append("cloud_name", CLOUD_NAME);
  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    // console.log(res);
    const resData = await res.json();

    return resData?.url;
  } catch (error) {
    console.log(error);
  }
};
