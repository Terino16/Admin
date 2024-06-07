// import React, { useState } from 'react';
// import { poppins400, poppins600 } from '../app/fonts';

// const AdminProfilePage = () => {
//   const [adminDetails, setAdminDetails] = useState({
//     name: 'Admin Name',
//     email: 'admin@example.com',
//     password: '',
//     oldPassword: '',
//     newPassword: '',
//     confirmNewPassword: '',
//   });
//   const [isEditing, setIsEditing] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAdminDetails((prevDetails) => ({
//       ...prevDetails,
//       [name]: value,
//     }));
//   };

//   const handlePasswordChange = (e) => {
//     e.preventDefault();
//     if (adminDetails.newPassword !== adminDetails.confirmNewPassword) {
//       alert('New passwords do not match!');
//       return;
//     }

//     alert('Password changed successfully!');
//   };

//   return (
//     <div className='mt-20 flex flex-col items-center bg-gray-100 p-4 rounded-md shadow-md max-w-md mx-auto'>
//       <h2 className={`${poppins600.className} text-2xl mb-4`}>Admin Profile</h2>
//       <div className='w-full'>
//         <div className='mb-4'>
//           <label className={`${poppins400.className} block text-gray-700`}>Name</label>
//           <input
//             type='text'
//             name='name'
//             value={adminDetails.name}
//             onChange={handleChange}
//             className='p-2 w-full rounded border border-textgray focus:ring focus:ring-tealblue focus:outline-none focus:border-none'
//             disabled
//           />
//         </div>
//         <div className='mb-4'>
//           <label className={`${poppins400.className} block text-gray-700`}>Email</label>
//           <input
//             type='email'
//             name='email'
//             value={adminDetails.email}
//             onChange={handleChange}
//             className='p-2 w-full rounded border border-textgray focus:ring focus:ring-tealblue focus:outline-none focus:border-none'
//             disabled
//           />
//         </div>
//         {!isEditing && (
//           <button
//             onClick={() => setIsEditing(true)}
//             className={`${poppins600.className} px-5 py-3 rounded bg-blue-500 text-white w-full mt-4`}
//           >
//             Change Password
//           </button>
//         )}
//         {isEditing && (
//           <form onSubmit={handlePasswordChange} className="flex flex-col w-full">
//             <div className='mb-4'>
//               <label className={`${poppins400.className} block text-gray-700`}>Old Password</label>
//               <input
//                 type='password'
//                 name='oldPassword'
//                 value={adminDetails.oldPassword}
//                 onChange={handleChange}
//                 className='p-2 w-full rounded border border-textgray focus:ring focus:ring-tealblue focus:outline-none focus:border-none'
//               />
//             </div>
//             <div className='mb-4'>
//               <label className={`${poppins400.className} block text-gray-700`}>New Password</label>
//               <input
//                 type='password'
//                 name='newPassword'
//                 value={adminDetails.newPassword}
//                 onChange={handleChange}
//                 className='p-2 w-full rounded border border-textgray focus:ring focus:ring-tealblue focus:outline-none focus:border-none'
//               />
//             </div>
//             <div className='mb-4'>
//               <label className={`${poppins400.className} block text-gray-700`}>Confirm New Password</label>
//               <input
//                 type='password'
//                 name='confirmNewPassword'
//                 value={adminDetails.confirmNewPassword}
//                 onChange={handleChange}
//                 className='p-2 w-full rounded border border-textgray focus:ring focus:ring-tealblue focus:outline-none focus:border-none'
//               />
//             </div>
//             <button
//               type='submit'
//               className={`${poppins600.className} px-5 py-3 rounded bg-blue-500 text-white w-full`}
//             >
//               Change Password
//             </button>
//             <button
//               type='button'
//               onClick={() => setIsEditing(false)}
//               className={`${poppins600.className} px-5 py-3 rounded bg-gray-500 text-white w-full mt-4`}
//             >
//               Cancel
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminProfilePage;

"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminProfile = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    oldPassword: "",
    newPassword: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/signin");
    }

    if (session) {
      const { user } = session;
      setFormData({
        ...formData,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
      });
    }
  }, [status, router, session]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/admin/data-change", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, userId: session?.user?.id }),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Profile updated successfully");
      } else {
        toast.error(data.error);
      }
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null; // or a loading spinner
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Profile</h1>
      <div className="bg-white rounded p-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={true}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Old Password</label>
            <input
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminProfile;
