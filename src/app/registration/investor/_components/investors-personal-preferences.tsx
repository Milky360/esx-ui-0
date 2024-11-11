import { Button, Checkbox, Form, Input, Select, Table } from "antd";

const { Option } = Select;

type InvestorPersonalPreferencesFormDataType = { placeholder: string };

export default function InvestorPersonalPreferences() {
  const [form] = Form.useForm();

  const handleSubmit = (values: InvestorPersonalPreferencesFormDataType) => {};

  const columns = [
    {
      title: "Investment Amount",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Date of Investment",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status of Investment",
      dataIndex: "status",
      key: "status",
    },
  ];

  const data = [
    {
      key: "1",
      amount: "$1000",
      date: "2023-01-01",
      status: "Active",
    },
    // Add more data as needed
  ];

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        <div className="mb-8 rounded-lg border bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Notifications and Alerts
          </h2>

          <Form.Item name="eventNotifications" valuePropName="checked">
            <Checkbox>Notifications for Events of Interest</Checkbox>
          </Form.Item>

          <Form.Item name="investmentUpdates" valuePropName="checked">
            <Checkbox>Investment and Wish List Updates</Checkbox>
          </Form.Item>
        </div>

        <div className="mb-8 rounded-lg border bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Profile Management</h2>

          <Form.Item label="Update Personal Information" name="personalInfo">
            <Input placeholder="Name, Contact Details" />
          </Form.Item>

          <Form.Item label="Change Password" name="password">
            <Input.Password />
          </Form.Item>

          <Form.Item name="communicationPreferences" valuePropName="checked">
            <Checkbox.Group>
              <Checkbox value="email">Email</Checkbox>
              <Checkbox value="sms">SMS</Checkbox>
            </Checkbox.Group>
          </Form.Item>

          <Form.Item
            label="Investment Preferences"
            name="investmentPreferences"
          >
            <Input />
          </Form.Item>
        </div>

        <div className="mb-8 rounded-lg border bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Payment Options</h2>

          <Form.Item label="Bank Account Details" name="bankAccountDetails">
            <Input />
          </Form.Item>

          <Form.Item label="Linking Payment Methods" name="paymentMethods">
            <Select placeholder="Select Payment Method">
              <Option value="creditCard">Credit Card</Option>
              <Option value="debitCard">Debit Card</Option>
              <Option value="teleBirr">TeleBirr</Option>
            </Select>
          </Form.Item>
        </div>

        <div className="mb-8 rounded-lg border bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Investment History</h2>

          <Table columns={columns} dataSource={data} />
        </div>

        <Button type="primary" htmlType="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}
