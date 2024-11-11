import { Button, Form, Input } from "antd";
import { AiFillCheckCircle } from "react-icons/ai";

type VerificationsFormDataType = { placeholder: string };

export default function Verifications() {
  const handleSubmit = (values: VerificationsFormDataType) => {};

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="w-full max-w-sm rounded-lg bg-white p-10 text-center shadow-lg">
        <div className="mb-4 flex justify-center">
          <AiFillCheckCircle className="text-green-500" size={64} />
        </div>

        <h2 className="mb-2 text-2xl font-semibold">Verify Your Email</h2>
        <p className="mb-6 text-gray-500">
          Please verify your email address and proceed to the next page
        </p>

        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please enter your email address" },
              { type: "email", message: "Please enter a valid email address" },
            ]}
          >
            <Input
              placeholder="Enter your email"
              className="h-12 rounded-md px-4"
            />
          </Form.Item>

          <Button type="default" htmlType="submit" size="large">
            Continue
          </Button>
        </Form>
      </div>
    </div>
  );
}
