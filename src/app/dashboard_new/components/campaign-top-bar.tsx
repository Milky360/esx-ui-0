// import React, { useState } from "react";
// import { CalendarOutlined, EditOutlined } from "@ant-design/icons";
// import { Button, Col, DatePicker, Modal, Row, Space, Typography } from "antd";
// import CardTest from "./test";
// const { Text } = Typography;
// const CampaignTopBar: React.FC = () => {
//   const [isCalendarVisible, setIsCalendarVisible] = useState(false);
//   const handleCalendarClick = () => {
//     setIsCalendarVisible(true);
//   };
//   const handleCalendarSelect = (date: any) => {
//     console.log("Selected Date: ", date?.format("YYYY-MM-DD"));
//     setIsCalendarVisible(false);
//   };
//   return (
//     <Row
//       justify="space-between"
//       align="middle"
//       className="mt-40"
//       style={{
//         padding: "10px 20px",
//         borderRadius: "8px",
//       }}
//     >
//       {/* Left Section: Logo and Company Name */}
//       <Col>
//         <Space size="large">
//           <img
//             src="/path-to-your-logo.png"
//             alt="Company Logo"
//             style={{ height: "40px", width: "40px" }}
//           />
//           <Text strong style={{ fontSize: "18px" }}>
//             Lersha Agri Digital
//           </Text>
//         </Space>
//       </Col>
//       {/* Right Section: Buttons */}
//       <Col>
//         <Space size="middle">
//           <Button
//             icon={<CalendarOutlined style={{ color: "blue" }} />}
//             onClick={handleCalendarClick}
//             style={{
//               backgroundColor: "#Eff1F8",
//             }}
//           >
//             Select Dates
//           </Button>
//           {/* Modal for calendar */}
//           <Modal
//             title="Select Date"
//             visible={isCalendarVisible}
//             onCancel={() => setIsCalendarVisible(false)}
//             footer={null}
//           >
//             <DatePicker
//               onChange={handleCalendarSelect}
//               style={{ width: "100%" }}
//             />
//           </Modal>
//           <Button
//             icon={<EditOutlined style={{ color: "blue" }} />}
//             type="default"
//             style={{
//               backgroundColor: "#Eff1F8",
//             }}
//           >
//             Edit Project
//           </Button>
//         </Space>
//       </Col>
//     </Row>
//   );
// };
// export default CampaignTopBar;
import React, { useState } from "react";

import { CalendarOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, DatePicker, Row, Space, Typography } from "antd";

const { Text } = Typography;

const CampaignTopBar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handleDateChange = (date: any) => {
    const formattedDate = date?.format("YYYY-MM-DD") || null;
    setSelectedDate(formattedDate);
    console.log("Selected Date: ", formattedDate);
  };

  return (
    <Row
      justify="space-between"
      align="middle"
      className="mt-40"
      style={{
        padding: "10px 20px",
        borderRadius: "8px",
      }}
    >
      {/* Left Section: Logo and Company Name */}
      <Col>
        <Space size="large">
          <img
            src="/path-to-your-logo.png"
            alt="Company Logo"
            style={{ height: "40px", width: "40px" }}
          />
          <Text strong style={{ fontSize: "30px" }}>
            Lersha Agri Digital
          </Text>
        </Space>
      </Col>

      {/* Right Section: Buttons */}
      <Col>
        <Space size="middle">
          <DatePicker
            onChange={handleDateChange}
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "8px",
            }}
            suffixIcon={<CalendarOutlined style={{ color: "blue" }} />}
            placeholder="Select Dates"
            className="select-date-antd"
          />

          <Button
            icon={<EditOutlined style={{ color: "blue", fontSize: "20px" }} />}
            type="default"
            style={{
              backgroundColor: "#Eff1F8",
            }}
          >
            Report
          </Button>
        </Space>
      </Col>
    </Row>
  );
};

export default CampaignTopBar;
