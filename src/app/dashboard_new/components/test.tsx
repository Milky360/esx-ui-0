// import React, { useState } from "react";
// import { CalendarOutlined } from "@ant-design/icons";
// import CustomCard from "./campaign-cards";
// import { FaCircle,  } from 'react-icons/fa';
// // import { FaTarget } from 'react-icons/fa';
// // import {  IoTarget } from 'react-icons/io';
// const CardTest: React.FC = () => {
//   const [selectedCard, setSelectedCard] = useState<number | null>(null);
//   const cards = [
//     { id: 1, title: "Funding Goal", underText: "200,00 br", icon: <CalendarOutlined /> },
//     { id: 2, title: "Card 2", underText: "300,00 br", icon: <CalendarOutlined /> },
//     { id: 3, title: "Card 3", underText: "400,00 br", icon:         <CalendarOutlined />
//     },
//   ];
//   return (
//     <div style={{ display: "flex", gap: "16px", alignItems: "space-between" }}>
//       {cards.map((card) => (
//         <CustomCard
//           key={card.id}
//           title={card.title}
//           underText={card.underText}
//           icon={card.icon}
//           isSelected={selectedCard === card.id}
//           onClick={() => setSelectedCard(card.id)}
//         />
//       ))}
//     </div>
//   );
// };
// export default CardTest;
import React, { useState } from "react";

import { CalendarOutlined } from "@ant-design/icons";

import CustomCard from "./campaign-cards";

const CardTest: React.FC = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      title: "Funding Goal",
      underText: "200,000 br",
      icon: "/target.svg",
    },

    {
      id: 2,
      title: "Campaign Reach",
      underText: "32,500 br",
      icon: <CalendarOutlined />,
    },
    { id: 3, title: "Investors", underText: "70", icon: <CalendarOutlined /> },
    {
      id: 4,
      title: "Campaign Status",
      underText: "40%",
      icon: <CalendarOutlined />,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between", // Distribute space evenly between cards
        gap: "16px", // Optional: Add space between cards for small screens
        flexWrap: "wrap", // Allow cards to wrap on smaller screens
      }}
    >
      {cards.map((card) => (
        <CustomCard
          key={card.id}
          title={card.title}
          underText={card.underText}
          icon={card.icon}
          isSelected={selectedCard === card.id}
          onClick={() => setSelectedCard(card.id)}
        />
      ))}
    </div>
  );
};

export default CardTest;
