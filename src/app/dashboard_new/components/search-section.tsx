// import React from 'react';
// import { Input, Space, DatePicker } from 'antd';
// import { SearchOutlined, FilterOutlined, CalendarOutlined } from '@ant-design/icons';

// const { RangePicker } = DatePicker;

// const SearchSection: React.FC = () => {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'space-between',
//         // padding: '16px',
//         // backgroundColor: '#f5f5f5',
//         borderRadius: '8px',
//       }}
//     >
//       {/* Search Field */}
//       <Input
//         prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
//         placeholder="Search"
//         style={{ width: 300 }}
//       />

//       {/* Filter and Calendar Section */}
//       <Space size="middle">
//         <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
//           <FilterOutlined style={{ fontSize: '16px', color: '#595959' }} />
//           <span style={{ color: '#595959', fontWeight: 500 }}>Filters</span>
//         </div>

//         <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
//           <CalendarOutlined style={{ fontSize: '16px', color: '#595959' }} />
//           <RangePicker
//             style={{ border: 'none', background: 'transparent', color: '#595959' }}
//             separator="-"
//             bordered={false}
//             placeholder={["Start Date", "End Date"]}
//           />
//         </div>
//       </Space>
//     </div>
//   );
// };

// export default SearchSection;



import React from 'react';
import { Input, Space, Button } from 'antd';
import { SearchOutlined, FilterOutlined, CalendarOutlined } from '@ant-design/icons';

const SearchSection: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        // padding: '16px',
        // backgroundColor: '#fff',
        // borderRadius: '8px',
        // boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Search Field */}
      <Input
        prefix={<SearchOutlined style={{ color: '#bfbfbf' }} />}
        placeholder="Search"
        style={{
          width: 300,
          height: 40,
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          border: '1px solid #d9d9d9',
        }}
      />

      {/* Filter and Calendar Section */}
      <Space size="middle">
        {/* Filter Button */}
        <Button
          icon={<FilterOutlined style={{ fontSize: '16px', color: '#595959' }} />}
          style={{
            height: 40,
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            border: '1px solid #d9d9d9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Filters
        </Button>

        {/* Calendar Section */}
        <Button
          icon={<CalendarOutlined style={{ fontSize: '16px', color: '#595959' }} />}
          style={{
            height: 40,
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            border: '1px solid #d9d9d9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          April 11 - April 24
        </Button>
      </Space>
    </div>
  );
};

export default SearchSection;
