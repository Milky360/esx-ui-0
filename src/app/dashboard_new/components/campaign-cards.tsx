// import React from "react";
// import { Card } from "antd";

// interface CustomCardProps {
//   title: string;
//   underText: string;
//   icon: React.ReactNode;
//   isSelected: boolean;
//   onClick?: () => void;
// }

// const CustomCard: React.FC<CustomCardProps> = ({
//   title,
//   underText,
//   icon,
//   isSelected,
//   onClick,
// }) => {
//   return (
//     <Card
//       title={
//         <span style={{ fontSize: "18px", fontWeight: "bold" }}>{title}</span>
//       }
//       extra={icon}
//       style={{
//         width: 300,
//         backgroundColor: isSelected ? "#e6f7ff" : "#fff", 
//         cursor: "pointer", 
//         border: isSelected ? "2px solid #1890ff" : "1px solid #f0f0f0", 
//         borderRadius: "8px",
//         transition: "background-color 0.3s, border-color 0.3s",
//         alignItems: "space-between"
//       }}
//       onClick={onClick}
//     >
//       <p style={{ fontWeight: "bold" }}>{underText}</p>
//     </Card>
//   );
// };

// export default CustomCard;



// import React from "react";
// import { Card } from "antd";

// interface CustomCardProps {
//   title: string;
//   underText: string;
//   icon: React.ReactNode;
//   isSelected: boolean;
//   onClick?: () => void;
// }

// const CustomCard: React.FC<CustomCardProps> = ({
//   title,
//   underText,
//   icon,
//   isSelected,
//   onClick,
// }) => {
//   return (
//     <Card
//       title={
//         <span
//           style={{
//             fontSize: "18px",
//             // fontWeight: "bold",
//             color: isSelected ? "#fff" : "#000", // White text for selected card
//           }}
//         >
//           {title}
//         </span>
//       }
//       extra={
//         <span
//           style={{
//             color: isSelected ? "#fff" : "#000", // White icon for selected card
//           }}
//         >
//           {icon}
//         </span>
//       }
//       style={{
//         width: 300,
//         backgroundColor: isSelected ? "#0766AD" : "#fff", // Background color
//         cursor: "pointer",
//         border: isSelected ? "2px solid #1890ff" : "1px solid #f0f0f0",
//         borderRadius: "8px",
//         transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
//         alignItems: "space-evenly"
//       }}
//       onClick={onClick}
//     >
//       <p
//         style={{
//           fontWeight: "bold",
//           color: isSelected ? "#fff" : "#000", // White text for underText
//         }}
//       >
//         {underText}
//       </p>
//     </Card>
//   );
// };

// export default CustomCard;




// import React from "react";
// import { Card } from "antd";

// interface CustomCardProps {
//   title: string;
//   underText: string;
//   icon: React.ReactNode;  // Icon can now be a React component or an image path
//   isSelected: boolean;
//   onClick?: () => void;
// }

// const CustomCard: React.FC<CustomCardProps> = ({
//   title,
//   underText,
//   icon,
//   isSelected,
//   onClick,
// }) => {
//   const iconColor = isSelected ? "#fff" : "#000";
//   return (
//     <Card
//       title={
//         <span
//           style={{
//             fontSize: "18px",
//             color: isSelected ? "#fff" : "#000", // White text for selected card
//           }}
//         >
//           {title}
//         </span>
//       }
//       extra={
//         <span
//           style={{
//             color: isSelected ? "#fff" : "#000", // White icon for selected card
//           }}
//         >
//           {typeof icon === "string" ? (
//             <img src={icon} alt="icon" style={{ width: "24px", height: "24px" }} />
//           ) : (
//             icon // If it's a React component (like an Ant Design icon), render it directly
//           )}
//         </span>
//       }
//       style={{
//         width: 300,
//         backgroundColor: isSelected ? "#0766AD" : "#fff", // Background color
//         cursor: "pointer",
//         border: isSelected ? "2px solid #1890ff" : "1px solid #f0f0f0",
//         borderRadius: "8px",
//         transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
//         alignItems: "space-evenly"
//       }}
//       onClick={onClick}
//     >
//       <p
//         style={{
//           fontWeight: "bold",
//           color: isSelected ? "#fff" : "#000", // White text for underText
//         }}
//       >
//         {underText}
//       </p>
//     </Card>
//   );
// };

// export default CustomCard;



// import React from "react";
// import { Card } from "antd";

// interface CustomCardProps {
//   title: string;
//   underText: string;
//   icon: React.ReactNode; // Icon can now be a React component or an image path
//   isSelected: boolean;
//   onClick?: () => void;
// }

// const CustomCard: React.FC<CustomCardProps> = ({
//   title,
//   underText,
//   icon,
//   isSelected,
//   onClick,
// }) => {
//   const textColor = isSelected ? "#fff" : "#000"; 
  
//   const iconColor = isSelected ? "#fff" : "#000"; // White when selected, black when not

//   return (
//     <Card
//       title={
//         <span
//           style={{
//             fontSize: "18px",
//             color: textColor, // White text for selected card
//           }}
//         >
//           {title}
//         </span>
//       }
//       extra={
//         <span
//           style={{
//             color: iconColor, // Color for icon based on selection
//           }}
//         >
//           {typeof icon === "string" ? (
//             // For SVG image path, we will attempt to color it with the logic above
//             <img
//               src={icon}
//               alt="icon"
//               style={{
//                 width: "24px",
//                 height: "24px",
//                 filter: isSelected ? "invert(1)" : "none", // Use invert to change color
//               }}
//             />
//           ) : (
//             icon // If it's a React component (like an Ant Design icon), render it directly
//           )}
//         </span>
//       }
//       style={{
//         width: 300,
//         backgroundColor: isSelected ? "#0766AD" : "#fff", // Background color
//         cursor: "pointer",
//         border: isSelected ? "2px solid #1890ff" : "1px solid #f0f0f0",
//         borderRadius: "8px",
//         transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
//         alignItems: "space-evenly",
//       }}
//       onClick={onClick}
//     >
//       <p
//         style={{
//           fontWeight: "bold",
//           color: textColor, // Change text color based on selection state
//         }}
//       >
//         {underText}
//       </p>
//     </Card>
//   );
// };

// export default CustomCard;



import React from "react";
import { Card } from "antd";

interface CustomCardProps {
  title: string;
  underText: string;
  icon: React.ReactNode; // Icon can now be a React component or an image path
  isSelected: boolean;
  onClick?: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({
  title,
  underText,
  icon,
  isSelected,
  onClick,
}) => {
  const textColor = isSelected ? "#fff" : "#000"; // Text color based on selection
  const iconColor = isSelected ? "#0766AD" : "#000"; // Icon color based on selection

  return (
    <Card
      title={
        <span
          style={{
            fontSize: "18px",
            color: textColor, // Title text color
          }}
        >
          {title}
        </span>
      }
      extra={
        <span
          style={{
            color: iconColor, // Icon color based on selection
          }}
        >
          {typeof icon === "string" ? (
            <img
              src={icon}
              alt="icon"
              style={{
                width: "64px",
                height: "24px",
                color: iconColor, // This should now work to change the color
              }}
            />
          ) : (
            icon // Render directly if it's a React component (like Ant Design icon)
          )}
        </span>
      }
      style={{
        width: 300,
        backgroundColor: isSelected ? "#0766AD" : "#fff", // Card background color
        cursor: "pointer",
        border: isSelected ? "2px solid #1890ff" : "1px solid #f0f0f0",
        borderRadius: "8px",
        transition: "background-color 0.3s, border-color 0.3s, color 0.3s",
        alignItems: "space-evenly",
      }}
      onClick={onClick}
    >
      <p
        style={{
          fontWeight: "bold",
          color: textColor, // Under text color based on selection
        }}
      >
        {underText}
      </p>
    </Card>
  );
};

export default CustomCard;
