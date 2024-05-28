// // import { useState } from "react";

// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

// const schema = z.object({
//   username: z.string().min(3),
//   mail: z.string().email(),
//   phnumber: z.string().min(10),
//   message: z.string().min(2),
// });

// const Contact = () => {
//   // const [name, setName] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [number, setNumber] = useState("");
//   // const [message, setMessage] = useState("");

//   // onChange={(e) => {
//   //     setName(e.target.value);

//   const { register, watch, handleSubmit, reset, formState: {errors, isValid, isDirty}, } = useForm({mode: "onChange",
//     resolver: zodResolver(schema),
//   });

//   const name = watch("username");

//   console.log(errors);
//   console.log(errors.username?.message);

//   const onStoreData = (totalData) => {
//     console.log(totalData);
//     reset();
//   };

//   console.log("component rendered/ re-rendered");

//   return (

//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">

//         <h1 className="text-2xl font-bold text-center">Contact Form</h1>

//         <form onSubmit={handleSubmit(onStoreData)} className="space-y-4">
            
//           <div>
//             <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
//               Name
//             </label>
//             <input
//               id="name"
//               placeholder="Your name"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
//               {...register("username")}
//             />
//             {/* {name} */}
//             {errors.username?.message && <p className="text-red-500">{errors.username?.message}</p>}
//           </div>

//           <div>
//             <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
//               Email
//             </label>
//             <input
//               placeholder="Your Email"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
//               {...register("mail")}
//             />
//             {errors.mail?.message && <p className="text-red-500">{errors.mail?.message}</p>}
//           </div>

//           <div>
//             <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-700">
//               Number
//             </label>
//             <input
//               placeholder="Your number"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
//               {...register("phnumber")}
//             />
//             {errors.phnumber?.message && <p className="text-red-500">{errors.phnumber?.message}</p>}
//           </div>

//           <div>
//             <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">
//               Message
//             </label>
//             <textarea
//               id="message"
//               rows={5}
//               placeholder="Your message"
//               className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
//               {...register("message")}
//             ></textarea>
//             {errors.message?.message && <p className="text-red-500">{errors.message?.message}</p>}
//           </div>

//           { isValid ?(
//           <button onClick={() => {alert("Form Submitted Successfully")} }
//             type="submit"
//             className="w-full px-4 py-2 font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
//           >
//             SUBMIT
//           </button> ):(
//             <button
//             type="submit"
//             className="w-full px-4 py-2 font-medium text-white bg-gray-300 rounded-lg"
//             disabled={isValid}>SUBMIT</button>
//           )}

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  mail: z.string().email("Invalid email address"),
  phnumber: z.string().min(10, "Phone number must be at least 10 digits long"),
  message: z.string().min(2, "Message must be at least 2 characters long")
});

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/api/contact', data);
      if (response.status === 201) {
        alert('Message sent successfully');
      }
    } catch (error) {
      console.error('There was an error sending the message:', error);
      alert('Failed to send message');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
      <div className="mb-4">
        <label htmlFor="username" className="block mb-2">Name:</label>
        <input id="username" placeholder="Your name" {...register('username')} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        {errors.username && <span className="text-red-500">{errors.username.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="mail" className="block mb-2">Email:</label>
        <input id="mail" placeholder="Your email" {...register('mail')} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        {errors.mail && <span className="text-red-500">{errors.mail.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="phnumber" className="block mb-2">Phone Number:</label>
        <input id="phnumber" placeholder="Your phone number" {...register('phnumber')} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
        {errors.phnumber && <span className="text-red-500">{errors.phnumber.message}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2">Message:</label>
        <textarea id="message" rows="5" {...register('message')} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
        {errors.message && <span className="text-red-500">{errors.message.message}</span>}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Send</button>
    </form>
  );
};

export default Contact;

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// import axios from 'axios';

// const schema = z.object({
//   username: z.string().min(3, "Username must be at least 3 characters long"),
//   mail: z.string().email("Invalid email address"),
//   phnumber: z.string().min(10, "Phone number must be at least 10 digits long"),
//   message: z.string().min(2, "Message must be at least 2 characters long")
// });

// const Contact = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: zodResolver(schema)
//   });

//   const onSubmit = async (data) => {
//     try {
//       // Use the environment variable for the API URL
//       const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/contact`, data);
//       if (response.status === 201) {
//         alert('Message sent successfully');
//       }
//     } catch (error) {
//       console.error('There was an error sending the message:', error);
//       alert('Failed to send message');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mt-8 p-6 bg-gray-100 rounded-md shadow-md">
//       <div className="mb-4">
//         <label htmlFor="username" className="block mb-2">Name:</label>
//         <input id="username" placeholder="Your name" {...register('username')} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//         {errors.username && <span className="text-red-500">{errors.username.message}</span>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="mail" className="block mb-2">Email:</label>
//         <input id="mail" placeholder="Your email" {...register('mail')} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//         {errors.mail && <span className="text-red-500">{errors.mail.message}</span>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="phnumber" className="block mb-2">Phone Number:</label>
//         <input id="phnumber" placeholder="Your phone number" {...register('phnumber')} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" />
//         {errors.phnumber && <span className="text-red-500">{errors.phnumber.message}</span>}
//       </div>
//       <div className="mb-4">
//         <label htmlFor="message" className="block mb-2">Message:</label>
//         <textarea id="message" rows="5" {...register('message')} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"></textarea>
//         {errors.message && <span className="text-red-500">{errors.message.message}</span>}
//       </div>
//       <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">Send</button>
//     </form>
//   );
// };

// export default Contact;



