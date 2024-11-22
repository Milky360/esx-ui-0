// import Image from "next/image";
// import React from "react";
// import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
// import type { DatePickerProps } from "antd";
// import { Col, DatePicker, Input, Row } from "antd";
// const onChange: DatePickerProps["onChange"] = (date, dateString) => {
//   console.log("Selected date:", date, "Formatted date string:", dateString);
// };
// const ProfileComponent: React.FC = () => (
//   <Row style={{ marginLeft: 20 }}>
//     <Col
//       xs={24}
//       sm={12}
//       md={12}
//       lg={12}
//       xl={12}
//       style={{ paddingTop: 30, paddingLeft: 10, paddingRight: 10 }}
//     >
//       {/* Profile Header */}
//       <div className="flex items-center space-x-2">
//         <p className="text-5xl font-bold">Haile Tesfaye</p>
//         <Image
//           src="/assets/dashboard/verified.svg"
//           alt="verified"
//           width={25}
//           height={25}
//         />
//       </div>
//       <p className="mt-3 text-xl">Individual Investor</p>
//       {/* Form Fields */}
//       <div className="mt-5">
//         <p>Full Name</p>
//         <Input value="Haile Tesfaye" readOnly />
//       </div>
//       <div className="mt-5">
//         <p>National ID No</p>
//         <Input value="5411-0011-99181-091110" readOnly />
//       </div>
//       <div className="mt-5">
//         <p>Email</p>
//         <Input value="hailetesfaye2017@gmail.com" readOnly />
//       </div>
//       <div className="mt-5">
//         <p>Phone Number</p>
//         <Input value="+251912345678" readOnly />
//       </div>
//       {/* <div className="mt-5">
//         <p>Date of Birth</p>
//         <DatePicker className="text-4xl" onChange={onChange} />
//       </div>
//       */}
//       <div className="mt-5">
//         <p>Date of Birth</p>
//         <DatePicker
//           className="text-4xl"
//           onChange={onChange}
//           style={{ width: "100%" }} // Set the desired width here
//         />
//       </div>
//     </Col>
//     {/* Placeholder for Additional Content */}
//     <Col
//       xs={24}
//       sm={12}
//       md={12}
//       lg={12}
//       xl={12}
//       style={{ paddingTop: 30, paddingLeft: 10, paddingRight: 10 }}
//     >
//       {/* <div className="mt-5 flex items-center space-x-2">
//        <MailOutlined size={45} />
//     <p className="text-xl">hailetesfaye2017@gmail.com</p>
//   </div>
//    */}
//       <div className="mt-5 flex items-center space-x-2">
//         <MailOutlined
//           style={{
//             fontSize: "20px", // Increase the size of the icon
//           }}
//         />
//         <p className="text-xl">hailetesfaye2017@gmail.com</p>
//       </div>
//       <div className="mt-5 flex items-center space-x-2">
//         <PhoneOutlined
//           style={{
//             fontSize: "20px", // Adjust size
//             color: "#000", // Set color to black
//             transform: "rotate(90deg)", // Rotate 90 degrees to the right
//           }}
//         />
//         <p>+251123456789</p>
//       </div>
//       <p className="mt-10">Haile Tesfaye</p>
//       <div className="mt-12 flex items-center space-x-2">
//         <Image
//           src="/assets/campaign/verified.svg"
//           alt="verified"
//           width={25}
//           height={25}
//         />
//         <p className="">Verified Fayda ID & Identity</p>
//       </div>
//       <div className="mb-5 mt-12 flex items-center space-x-2">
//         <p>
//           Email not verified. Please verify email by sending
//           <br />
//           verification email by clicking the below link
//           <br />
//           <a href="#">Send verification email</a>
//         </p>
//       </div>
//       <div className="mt-19 flex items-center space-x-2">
//         <Image
//           src="/assets/campaign/verified.svg"
//           alt="verified"
//           width={25}
//           height={25}
//         />
//         <p className="">Verified mobile number</p>
//       </div>
//       <div className="mt-12 flex items-center space-x-2">
//         <p className="">12/12/1982</p>
//       </div>
//     </Col>
//   </Row>
// );
// export default ProfileComponent;
// import Image from "next/image";
// import React, { useState } from "react";

// import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
// import { Button, Col, DatePicker, DatePickerProps, Input, Row } from "antd";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// const onChange: DatePickerProps["onChange"] = (date, dateString) => {
//   console.log("Selected date:", date, "Formatted date string:", dateString);
// };

// const ProfileComponent: React.FC = () => {
//   const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
//   const [phone, setPhone] = useState<string | undefined>(undefined);

//   return (
//     <Row style={{ marginLeft: 20 }}>
//       <Col
//         xs={24}
//         sm={12}
//         md={12}
//         lg={12}
//         xl={12}
//         style={{ paddingTop: 30, paddingLeft: 10, paddingRight: 10 }}
//       >
//         {/* Profile Header */}
//         <div className="flex items-center space-x-2">
//           <p className="f text-3xl">Haile Tesfaye</p>
//           <Image
//             src="/assets/dashboard/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//         </div>

//         <p className="mt-3 text-xl text-gray-700">Individual Investor</p>

//         <div className="mt-5">
//           <p>Full Name</p>
//           <Input value="Haile Tesfaye" style={{ width: "300px" }} />
//         </div>

//         <div className="mt-5">
//           <p>National ID No</p>
//           <Input value="5411-0011-99181-091110" style={{ width: "300px" }} />
//         </div>

//         <div className="mt-5">
//           <p>Email</p>
//           <Input
//             value="hailetesfaye2017@gmail.com"
//             style={{ width: "300px" }}
//           />
//         </div>

//         <div style={{ marginTop: 20 }}>
//           <p>Phone Number</p>
//           <PhoneInput
//             international={false}
//             defaultCountry="ET"
//             value={phone}
//             onChange={setPhone}
//             className="custom-phone-input"
//             style={{
//               width: "300px",
//               padding: "5px 11px",
//               borderRadius: "4px",
//               border: "1px solid #d9d9d9",
//               boxSizing: "border-box",
//             }}
//           />
//         </div>

//         <div className="mt-5">
//           <p>Date of Birth</p>
//           <DatePicker
//             className="text-4xl"
//             onChange={onChange}
//             style={{ width: "300px" }}
//           />
//         </div>
//       </Col>

//       <Col
//         xs={24}
//         sm={12}
//         md={12}
//         lg={12}
//         xl={12}
//         style={{ paddingTop: 30, paddingLeft: 10, paddingRight: 10 }}
//       >
//         <div className="mt-5 flex items-center space-x-2">
//           <MailOutlined style={{ fontSize: "20px" }} />
//           <p className="text-xl">hailetesfaye2017@gmail.com</p>
//         </div>

//         <div className="mt-3 flex items-center space-x-2">
//           <PhoneOutlined
//             style={{
//               fontSize: "20px",
//               color: "#000",
//               transform: "rotate(90deg)",
//             }}
//           />
//           <p>+251123456789</p>
//         </div>

//         <p className="mt-10">Haile Tesfaye</p>

//         <div className="mt-12 flex items-center space-x-2">
//           <Image
//             src="/assets/campaign/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//           <p className="">Verified Fayda ID & Identity</p>
//         </div>

//         <div className="mb-10 mt-12 flex items-center space-x-2">
//           <p>
//             Email not verified. Please verify email by sending
//             <br />
//             verification email by clicking the below link
//             <br />
//             <a href="#">Send verification email</a>
//           </p>
//         </div>

//         <div className="mt-19 flex items-center space-x-2">
//           <Image
//             src="/assets/campaign/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//           <p className="">Verified mobile number</p>
//         </div>
//         <div className="mt-12 flex items-center space-x-2">
//           <p className="">12/12/1982</p>
//         </div>
//       </Col>
//       <Button
//         style={{ marginLeft: "-30px", borderRadius: "15px" }}
//         className="ml-3 mt-10"
//         type="primary"
//       >
//         Save
//       </Button>
//     </Row>
//   );
// };

// export default ProfileComponent;




// import Image from "next/image";
// import React, { useState } from "react";

// import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
// import { Button, Col, DatePicker, DatePickerProps, Input, Row } from "antd";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// const onChange: DatePickerProps["onChange"] = (date, dateString) => {
//   console.log("Selected date:", date, "Formatted date string:", dateString);
// };

// const ProfileComponent: React.FC = () => {
//   const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
//   const [phone, setPhone] = useState<string | undefined>(undefined);

//   const [fullName, setFullName] = useState("Haile Tesfaye");
//   const [email, setEmail] = useState("hailetesfaye2017@gmail.com");
//   const [nationalID, setNationalID] = useState("5411-0011-99181-091110");

//   const handleSave = () => {
//     console.log("User Data:");
//     console.log("Full Name:", fullName);
//     console.log("Email:", email);
//     console.log("National ID:", nationalID);
//     console.log("Phone Number:", phone);
//   };

//   return (
//     <Row style={{ marginLeft: 20 }} gutter={[-60, 0]}>
//       <Col
//         xs={24}
//         sm={12}
//         md={12}
//         lg={12}
//         xl={12}
//         style={{ paddingTop: 30, paddingLeft: 10, paddingRight: 10 }}
//       >
//         {/* Profile Header */}
//         <div className="flex items-center space-x-2">
//           <p className="f text-3xl">{fullName}</p>
//           <Image
//             src="/assets/dashboard/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//         </div>

//         <p className="mt-3 text-xl text-gray-700">Individual Investor</p>

//         <div className="mt-5">
//           <p>Full Name</p>
//           <Input
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             style={{ width: "300px" }}
//           />
//         </div>

//         <div className="mt-5">
//           <p>National ID No</p>
//           <Input
//             value={nationalID}
//             onChange={(e) => setNationalID(e.target.value)}
//             style={{ width: "300px" }}
//           />
//         </div>

//         <div className="mt-5">
//           <p>Email</p>
//           <Input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: "300px" }}
//           />
//         </div>

//         <div style={{ marginTop: 20 }}>
//           <p>Phone Number</p>
//           <PhoneInput
//             international={false}
//             defaultCountry="ET"
//             value={phone}
//             onChange={setPhone}
//             className="custom-phone-input"
//             style={{
//               width: "300px",
//               padding: "5px 11px",
//               borderRadius: "4px",
//               border: "1px solid #d9d9d9",
//               boxSizing: "border-box",
//             }}
//           />
//         </div>

//         <div className="mt-5">
//           <p>Date of Birth</p>
//           <DatePicker
//             className="text-4xl"
//             onChange={onChange}
//             style={{ width: "300px" }}
//           />
//         </div>
//       </Col>

//       <Col
//         xs={24}
//         sm={12}
//         md={12}
//         lg={12}
//         xl={12}
//         style={{ paddingTop: 30, paddingLeft: 10, paddingRight: 10 }}
//       >
//         <div className="mt-5 flex items-center space-x-2">
//           <MailOutlined style={{ fontSize: "20px" }} />
//           <p className="text-xl">{email}</p>
//         </div>

//         <div className="mt-3 flex items-center space-x-2">
//           <PhoneOutlined
//             style={{
//               fontSize: "20px",
//               color: "#000",
//               transform: "rotate(90deg)",
//             }}
//           />
//           <p>+251123456789</p>
//         </div>

//         <p className="mt-10">{fullName}</p>

//         <div className="mt-12 flex items-center space-x-2">
//           <Image
//             src="/assets/campaign/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//           <p className="">Verified Fayda ID & Identity</p>
//         </div>

//         <div className="mb-10 mt-12 flex items-center space-x-2">
//           <p>
//             Email not verified. Please verify email by sending
//             <br />
//             verification email by clicking the below link
//             <br />
//           <a href="#">Send verification email</a>
//           </p>
//         </div>

//         <div className="mt-19 flex items-center space-x-2">
//           <Image
//             src="/assets/campaign/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//           <p className="">Verified mobile number</p>
//         </div>
//         <div className="mt-12 flex items-center space-x-2">
//           <p className="">12/12/1982</p>
//         </div>
//       </Col>
//       <Button
//         style={{ marginLeft: "-30px", borderRadius: "15px", paddingLeft: "30px", paddingRight: "30px" }}
//         className="ml-3  mt-10"
//         type="primary"
//         onClick={handleSave}
//       >
//         Save
//       </Button>
//     </Row>
//   );
// };

// export default ProfileComponent;




// import Image from "next/image";
// import React, { useState } from "react";

// import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
// import { Button, Col, DatePicker, DatePickerProps, Input, Row } from "antd";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// const onChange: DatePickerProps["onChange"] = (date, dateString) => {
//   console.log("Selected date:", date, "Formatted date string:", dateString);
// };

// const ProfileComponent: React.FC = () => {
//   const [phoneNumber, setPhoneNumber] = useState<string | undefined>(undefined);
//   const [phone, setPhone] = useState<string | undefined>(undefined);

//   const [fullName, setFullName] = useState("Haile Tesfaye");
//   const [email, setEmail] = useState("hailetesfaye2017@gmail.com");
//   const [nationalID, setNationalID] = useState("5411-0011-99181-091110");

//   const handleSave = () => {
//     console.log("User Data:");
//     console.log("Full Name:", fullName);
//     console.log("Email:", email);
//     console.log("National ID:", nationalID);
//     console.log("Phone Number:", phone);
//   };

//   return (
//     <Row className=" max-w-2xl " gutter={[10, 0]} style={{ margin: 0 }}>
//       {/* First Column */}
//       <Col
//         xs={24}
//         sm={12}
//         md={12}
//         lg={12}
//         xl={12}
//         style={{ paddingTop: 30, paddingLeft: 10, paddingRight: 10 }}
//       >
//         {/* Profile Header */}
//         <div className="flex items-center space-x-2">
//           <p className="f text-3xl">{fullName}</p>
//           <Image
//             src="/assets/dashboard/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//         </div>

//         <p className="mt-3 text-xl text-gray-700">Individual Investor</p>

//         <div className="mt-5">
//           <p>Full Name</p>
//           <Input
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             style={{ width: "300px" }}
//           />
//         </div>

//         <div className="mt-5">
//           <p>National ID No</p>
//           <Input
//             value={nationalID}
//             onChange={(e) => setNationalID(e.target.value)}
//             style={{ width: "300px" }}
//           />
//         </div>

//         <div className="mt-5">
//           <p>Email</p>
//           <Input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: "300px" }}
//           />
//         </div>

//         <div style={{ marginTop: 20 }}>
//           <p>Phone Number</p>
//           <PhoneInput
//             international={false}
//             defaultCountry="ET"
//             value={phone}
//             onChange={setPhone}
//             className="custom-phone-input"
//             style={{
//               width: "300px",
//               padding: "5px 11px",
//               borderRadius: "4px",
//               border: "1px solid #d9d9d9",
//               boxSizing: "border-box",
//             }}
//           />
//         </div>

//         <div className="mt-5">
//           <p>Date of Birth</p>
//           <DatePicker
//             className="text-4xl"
//             onChange={onChange}
//             style={{ width: "300px" }}
//           />
//         </div>
//       </Col>

//       {/* Second Column */}
//       <Col
//         xs={24}
//         sm={12}
//         md={12}
//         lg={12}
//         xl={12}
//         style={{ paddingTop: 30, paddingLeft: 10, paddingRight: 10 }}
//       >
//         <div className="mt-5 flex items-center space-x-2">
//           <MailOutlined style={{ fontSize: "20px" }} />
//           <p className="text-xl">{email}</p>
//         </div>

//         <div className="mt-3 flex items-center space-x-2">
//           <PhoneOutlined
//             style={{
//               fontSize: "20px",
//               color: "#000",
//               transform: "rotate(90deg)",
//             }}
//           />
//           <p>+251123456789</p>
//         </div>

//         <p className="mt-10">{fullName}</p>

//         <div className="mt-12 flex items-center space-x-2">
//           <Image
//             src="/assets/campaign/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//           <p className="">Verified Fayda ID & Identity</p>
//         </div>

//         <div className="mb-10 mt-12 flex items-center space-x-2">
//           <p>
//             Email not verified. Please verify email by sending
//             <br />
//             verification email by clicking the below link
//             <br />
//             <a href="#">Send verification email</a>
//           </p>
//         </div>

//         <div className="mt-19 flex items-center space-x-2">
//           <Image
//             src="/assets/campaign/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//           <p className="">Verified mobile number</p>
//         </div>
//         <div className="mt-12 flex items-center space-x-2">
//           <p className="">12/12/1982</p>
//         </div>
//       </Col>

//       {/* Save Button */}
//       <Button
//         style={{
//           marginLeft: "-30px",
//           borderRadius: "15px",
//           paddingLeft: "30px",
//           paddingRight: "30px",
//         }}
//         className="ml-3 mt-10"
//         type="primary"
//         onClick={handleSave}
//       >
//         Save
//       </Button>
//     </Row>
//   );
// };

// export default ProfileComponent;




// import Image from "next/image";
// import React, { useState } from "react";

// import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
// import { Button, Col, DatePicker, DatePickerProps, Input, Row } from "antd";
// import PhoneInput from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// const onChange: DatePickerProps["onChange"] = (date, dateString) => {
//   console.log("Selected date:", date, "Formatted date string:", dateString);
// };

// const ProfileComponent: React.FC = () => {
//   const [phone, setPhone] = useState<string | undefined>(undefined);

//   const [fullName, setFullName] = useState("Haile Tesfaye");
//   const [email, setEmail] = useState("hailetesfaye2017@gmail.com");
//   const [nationalID, setNationalID] = useState("5411-0011-99181-091110");

//   const handleSave = () => {
//     console.log("User Data:");
//     console.log("Full Name:", fullName);
//     console.log("Email:", email);
//     console.log("National ID:", nationalID);
//     console.log("Phone Number:", phone);
//   };

//   return (
//     <Row
//       gutter={[20, 20]}
//       justify="center"
//       align="middle"
//       style={{ padding: "10px" }}
//     >
//       {/* First Column */}
//       <Col xs={24} sm={12} md={10} lg={10} xl={8}>
//         {/* Profile Header */}
//         <div className="flex items-center space-x-2">
//           <p className="f text-3xl">{fullName}</p>
//           <Image
//             src="/assets/dashboard/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//         </div>

//         <p className="mt-3 text-xl text-gray-700">Individual Investor</p>

//         <div className="mt-5">
//           <p>Full Name</p>
//           <Input
//             value={fullName}
//             onChange={(e) => setFullName(e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>

//         <div className="mt-5">
//           <p>National ID No</p>
//           <Input
//             value={nationalID}
//             onChange={(e) => setNationalID(e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>

//         <div className="mt-5">
//           <p>Email</p>
//           <Input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{ width: "100%" }}
//           />
//         </div>

//         <div style={{ marginTop: 20 }}>
//           <p>Phone Number</p>
//           <PhoneInput
//             international={false}
//             defaultCountry="ET"
//             value={phone}
//             onChange={setPhone}
//             className="custom-phone-input"
//             style={{
//               width: "100%",
//               padding: "5px 11px",
//               borderRadius: "4px",
//               border: "1px solid #d9d9d9",
//               boxSizing: "border-box",
//             }}
//           />
//         </div>

//         <div className="mt-5">
//           <p>Date of Birth</p>
//           <DatePicker
//             className="text-4xl"
//             onChange={onChange}
//             style={{ width: "100%" }}
//           />
//         </div>
//       </Col>

//       {/* Second Column */}
//       <Col xs={24} sm={12} md={10} lg={10} xl={8}>
//         <div className="mt-5 flex items-center space-x-2">
//           <MailOutlined style={{ fontSize: "20px" }} />
//           <p className="text-xl">{email}</p>
//         </div>

//         <div className="mt-3 flex items-center space-x-2">
//           <PhoneOutlined
//             style={{
//               fontSize: "20px",
//               color: "#000",
//               transform: "rotate(90deg)",
//             }}
//           />
//           <p>+251123456789</p>
//         </div>

//         <p className="mt-10">{fullName}</p>

//         <div className="mt-12 flex items-center space-x-2">
//           <Image
//             src="/assets/campaign/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//           <p className="">Verified Fayda ID & Identity</p>
//         </div>

//         <div className="mb-10 mt-12 flex items-center space-x-2">
//           <p>
//             Email not verified. Please verify email by sending
//             <br />
//             verification email by clicking the below link
//             <br />
//             <a href="#">Send verification email</a>
//           </p>
//         </div>

//         <div className="mt-19 flex items-center space-x-2">
//           <Image
//             src="/assets/campaign/verified.svg"
//             alt="verified"
//             width={25}
//             height={25}
//           />
//           <p className="">Verified mobile number</p>
//         </div>
//         <div className="mt-12 flex items-center space-x-2">
//           <p className="">12/12/1982</p>
//         </div>
//       </Col>

      
//     </Row>
//   );
// };

// export default ProfileComponent;




import Image from "next/image";
import React, { useState } from "react";

import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, DatePickerProps, Input, Row } from "antd";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log("Selected date:", date, "Formatted date string:", dateString);
};

const ProfileComponent: React.FC = () => {
  const [phone, setPhone] = useState<string | undefined>(undefined);

  const [fullName, setFullName] = useState("Haile Tesfaye");
  const [email, setEmail] = useState("hailetesfaye2017@gmail.com");
  const [nationalID, setNationalID] = useState("5411-0011-99181-091110");

  const handleSave = () => {
    console.log("User Data:");
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("National ID:", nationalID);
    console.log("Phone Number:", phone);
  };

  return (
    <Row
      gutter={[20, 20]}
      justify="center"
      align="middle"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "10px",
        boxSizing: "border-box",
      }}
    >
      {/* First Column */}
      <Col xs={24} sm={12} md={10} lg={10} xl={8}  style={{marginLeft: "-220px"}}>
        {/* Profile Header */}
        <div className="flex items-center space-x-2">
          <p className="f text-3xl">{fullName}</p>
          <Image
            src="/assets/dashboard/verified.svg"
            alt="verified"
            width={25}
            height={25}
          />
        </div>

        <p className="mt-3 text-xl text-gray-700">Individual Investor</p>

        <div className="mt-5">
          <p>Full Name</p>
          <Input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div className="mt-5">
          <p>National ID No</p>
          <Input
            value={nationalID}
            onChange={(e) => setNationalID(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div className="mt-5">
          <p>Email</p>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%" }}
          />
        </div>

        <div style={{ marginTop: 20 }}>
          <p>Phone Number</p>
          <PhoneInput
            international={false}
            defaultCountry="ET"
            value={phone}
            onChange={setPhone}
            className="custom-phone-input"
            style={{
              width: "100%",
              padding: "5px 11px",
              borderRadius: "4px",
              border: "1px solid #d9d9d9",
              boxSizing: "border-box",
            }}
          />
        </div>

        <div className="mt-5">
          <p>Date of Birth</p>
          <DatePicker
            className="text-4xl"
            onChange={onChange}
            style={{ width: "100%" }}
          />
        </div>
      </Col>

      {/* Second Column */}
      <Col xs={24} sm={12} md={10} lg={10} xl={8}>
        <div className="mt-5 flex items-center space-x-2">
          <MailOutlined style={{ fontSize: "18px" }} />
          <p className="text-xl">{email}</p>
        </div>

        <div className="mt-3 flex items-center space-x-2">
          <PhoneOutlined
            style={{
              fontSize: "18px",
              color: "#000",
              transform: "rotate(90deg)",
            }}
          />
          <p>+251123456789</p>
        </div>

        <p className="mt-10">{fullName}</p>

        <div className="mt-12 flex items-center space-x-2">
          <Image
            src="/assets/campaign/verified.svg"
            alt="verified"
            width={25}
            height={25}
          />
          <p className="">Verified Fayda ID & Identity</p>
        </div>

        <div className="mb-10 mt-12 flex items-center space-x-2">
          <p>
            Email not verified. Please verify email by sending
            <br />
            verification email by clicking the below link
            <br />
            <a href="#">Send verification email</a>
          </p>
        </div>

        <div className="mt-19 flex items-center space-x-2">
          <Image
            src="/assets/campaign/verified.svg"
            alt="verified"
            width={25}
            height={25}
          />
          <p className="">Verified mobile number</p>
        </div>
        <div className="mt-12 flex items-center space-x-2">
          <p className="">12/12/1982</p>
        </div>
      </Col>
    </Row>
  );
};

export default ProfileComponent;
