// import React from "react";
// import { Table, Button, Space } from "antd";
// import { EllipsisOutlined } from "@ant-design/icons";

// interface InvestorData {
//   key: string;
//   investor: string;
//   campaign: string;
//   shares: string;
//   date: string;
//   investmentValue: string;
// }

// const data: InvestorData[] = [
//   {
//     key: "1",
//     investor: "Amadou Daffe",
//     campaign: "Gebeya Talent Solutions",
//     shares: "10%",
//     date: "Dec 22, 2024",
//     investmentValue: "20,000",
//   },
//   {
//     key: "2",
//     investor: "Mulugeta Asfaw",
//     campaign: "Lersha Agri Digital",
//     shares: "8%",
//     date: "Dec 22, 2024",
//     investmentValue: "20,000",
//   },
//   {
//     key: "3",
//     investor: "Biniyam Tesfaye",
//     campaign: "RIDE Smart Transport",
//     shares: "13%",
//     date: "Dec 22, 2024",
//     investmentValue: "20,000",
//   },
//   {
//     key: "4",
//     investor: "Abebe Fentaw",
//     campaign: "ZayRide Mobility",
//     shares: "0.75%",
//     date: "Dec 22, 2024",
//     investmentValue: "20,000",
//   },
//   {
//     key: "5",
//     investor: "Kifle Biru",
//     campaign: "ArifPay Digital Services",
//     shares: "4%",
//     date: "Dec 22, 2024",
//     investmentValue: "20,000",
//   },
//   {
//     key: "6",
//     investor: "Natnael Adamu",
//     campaign: "Chapa Payment",
//     shares: "20%",
//     date: "Dec 22, 2024",
//     investmentValue: "20,000",
//   },
//   {
//     key: "7",
//     investor: "Abdu Rahman",
//     campaign: "Deliver Addis Logistics",
//     shares: "5%",
//     date: "Dec 22, 2024",
//     investmentValue: "20,000",
//   },
//   {
//     key: "8",
//     investor: "Selam Mekonnen",
//     campaign: "Yenepay E-Commerce",
//     shares: "32%",
//     date: "Dec 22, 2024",
//     investmentValue: "20,000",
//   },
//   {
//     key: "9",
//     investor: "Meheret Desta",
//     campaign: "Orbit Health Systems",
//     shares: "1%",
//     date: "Dec 22, 2024",
//     investmentValue: "20,000",
//   },
//   {
//     key: "10",
//     investor: "Addis Alemayehu",
//     campaign: "Green Ethiopias",
//     shares: "9%",
//     date: "Dec 22, 2024",
//     investmentValue: "20,000",
//   },
// ];

// const TableComponent: React.FC = () => {
//   const columns = [
//     {
//       title: "Investors",
//       dataIndex: "investor",
//       key: "investor",
//     },
//     {
//       title: "Campaign",
//       dataIndex: "campaign",
//       key: "campaign",
//     },
//     {
//       title: "Shares(%)",
//       dataIndex: "shares",
//       key: "shares",
//     },
//     {
//       title: "Date",
//       dataIndex: "date",
//       key: "date",
//     },
//     {
//       title: "Investment Value",
//       dataIndex: "investmentValue",
//       key: "investmentValue",
//       render: (text: string) => <span style={{ color: "green" }}>{text}</span>,
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: () => (
//         <Button
//           icon={<EllipsisOutlined />}
//           type="text"
//           style={{ fontSize: "18px" }}
//         />
//       ),
//     },
//   ];

//   return (
//     <div style={{ padding: "24px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
//       <Table
//         columns={columns}
//         dataSource={data}
//         pagination={{
//           pageSize: 5,
//           showSizeChanger: false,
//           position: ["bottomCenter"],
//         }}
//         bordered={false}
//         rowClassName={() => "custom-row"}
//       />
//     </div>
//   );
// };

// export default TableComponent;



import React from "react";
import { Table, Button, Space } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";

interface InvestorData {
  key: string;
  investor: string;
  campaign: string;
  shares: string;
  date: string;
  investmentValue: string;
}

// Original data remains the same
const data: InvestorData[] = [
  {
    key: "1",
    investor: "Amadou Daffe",
    campaign: "Gebeya Talent Solutions",
    shares: "10%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "2",
    investor: "Mulugeta Asfaw",
    campaign: "Lersha Agri Digital",
    shares: "8%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "3",
    investor: "Biniyam Tesfaye",
    campaign: "RIDE Smart Transport",
    shares: "13%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "4",
    investor: "Abebe Fentaw",
    campaign: "ZayRide Mobility",
    shares: "0.75%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "5",
    investor: "Kifle Biru",
    campaign: "ArifPay Digital Services",
    shares: "4%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "6",
    investor: "Natnael Adamu",
    campaign: "Chapa Payment",
    shares: "20%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "7",
    investor: "Abdu Rahman",
    campaign: "Deliver Addis Logistics",
    shares: "5%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "8",
    investor: "Selam Mekonnen",
    campaign: "Yenepay E-Commerce",
    shares: "32%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "9",
    investor: "Meheret Desta",
    campaign: "Orbit Health Systems",
    shares: "1%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "10",
    investor: "Addis Alemayehu",
    campaign: "Green Ethiopias",
    shares: "9%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "11",
    investor: "Tesfaye Desta",
    campaign: "Hidar Tours",
    shares: "14%",
    date: "Dec 22, 2024",
    investmentValue: "15,000",
  },
  {
    key: "12",
    investor: "Semhar Biruk",
    campaign: "SunPro Solar Energy",
    shares: "18%",
    date: "Dec 22, 2024",
    investmentValue: "22,000",
  },
  {
    key: "13",
    investor: "Kidus Solomon",
    campaign: "GrowGreen AgroTech",
    shares: "21%",
    date: "Dec 22, 2024",
    investmentValue: "25,000",
  },



  {
    key: "14",
    investor: "Amadou Daffe",
    campaign: "Gebeya Talent Solutions",
    shares: "10%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "15",
    investor: "Mulugeta Asfaw",
    campaign: "Lersha Agri Digital",
    shares: "8%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "16",
    investor: "Biniyam Tesfaye",
    campaign: "RIDE Smart Transport",
    shares: "13%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "17",
    investor: "Abebe Fentaw",
    campaign: "ZayRide Mobility",
    shares: "0.75%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "18",
    investor: "Kifle Biru",
    campaign: "ArifPay Digital Services",
    shares: "4%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "19",
    investor: "Natnael Adamu",
    campaign: "Chapa Payment",
    shares: "20%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "20",
    investor: "Abdu Rahman",
    campaign: "Deliver Addis Logistics",
    shares: "5%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "21",
    investor: "Selam Mekonnen",
    campaign: "Yenepay E-Commerce",
    shares: "32%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "22",
    investor: "Meheret Desta",
    campaign: "Orbit Health Systems",
    shares: "1%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "23",
    investor: "Addis Alemayehu",
    campaign: "Green Ethiopias",
    shares: "9%",
    date: "Dec 22, 2024",
    investmentValue: "20,000",
  },
  {
    key: "24",
    investor: "Tesfaye Desta",
    campaign: "Hidar Tours",
    shares: "14%",
    date: "Dec 22, 2024",
    investmentValue: "15,000",
  },
  {
    key: "25",
    investor: "Semhar Biruk",
    campaign: "SunPro Solar Energy",
    shares: "18%",
    date: "Dec 22, 2024",
    investmentValue: "22,000",
  },
  {
    key: "26",
    investor: "Kidus Solomon",
    campaign: "GrowGreennnnnnnnnnnnnnnnnnn AgroTech",
    shares: "21%",
    date: "Dec 22, 2024",
    investmentValue: "25,000",
  },
  {
    key: "27",
    investor: "Kidus Solomon",
    campaign: "GrowGreen AgroTech",
    shares: "21%",
    date: "Dec 22, 2024",
    investmentValue: "25,000",
  },
];

const TableComponent: React.FC = () => {
  const columns = [
    {
      title: "Investors",
      dataIndex: "investor",
      key: "investor",
    },
    {
      title: "Campaign",
      dataIndex: "campaign",
      key: "campaign",
    },
    {
      title: "Shares(%)",
      dataIndex: "shares",
      key: "shares",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Investment Value",
      dataIndex: "investmentValue",
      key: "investmentValue",
      render: (text: string) => <span style={{ color: "green" }}>{text}</span>,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Button
          icon={<EllipsisOutlined
            style={{
              transform: "rotate(90deg)", // Rotates the icon to make it vertical
              fontSize: "25px", // Optional: Adjust size
              color: "black", // Optional: Change color
            }}
            />}
          type="text"
          style={{ fontSize: "18px" }}
        />
      ),
    },
  ];

  return (
    <div
      style={{
        // padding: "24px",
        // backgroundColor: "#f9f9f9",
        // borderRadius: "8px",
      }}
    >
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          pageSize: 13,
          showSizeChanger: false,
          position: ["bottomRight"], // Updated to "bottomRight"
          itemRender: (page, type, originalElement) => {
            if (type === "next") {
              return (
                <Space>
                  <span style={{ color: "#000" }}>Next</span> {originalElement}
                </Space>
              );
            }
            return originalElement;
          },
        }}
        bordered={false}
        rowClassName={() => "custom-row"}
      />
    </div>
  );
};

export default TableComponent;
