import React from "react";

import { Button, DatePicker, Form, Input } from "antd";

const { TextArea } = Input;

export default function BusinessPlanStrategy() {
  const handleSubmit = (values: any) => {};

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      <Form layout="vertical" onFinish={handleSubmit}>
        {/* Executive Summary Section */}
        <section
          className="registration-form-border mb-8 rounded-lg bg-white p-6"
          id="executive_summary"
        >
          <h2 className="mb-6 text-2xl font-semibold">Executive Summary</h2>

          <Form.Item
            label="Business Overview"
            name="businessOverview"
            rules={[
              { required: true, message: "Business Overview is required!" },
            ]}
          >
            <TextArea maxLength={1000} placeholder="Enter Business Overview" />
          </Form.Item>

          <Form.Item
            label="Mission Statement"
            name="missionStatement"
            rules={[
              { required: true, message: "Mission Statement is required!" },
            ]}
          >
            <TextArea maxLength={500} placeholder="Enter Mission Statement" />
          </Form.Item>

          <Form.Item
            label="Vision Statement"
            name="visionStatement"
            rules={[
              { required: true, message: "Vision Statement is required!" },
            ]}
          >
            <TextArea maxLength={500} placeholder="Enter Vision Statement" />
          </Form.Item>

          <Form.Item
            label="Key Objectives"
            name="keyObjectives"
            rules={[
              { required: true, message: "Key Objectives are required!" },
            ]}
          >
            <TextArea maxLength={300} placeholder="Enter Key Objectives" />
          </Form.Item>
        </section>

        {/* Market Analysis Section */}
        <section
          className="registration-form-border mb-8 rounded-lg bg-white p-6"
          id="market_analysis"
        >
          <h2 className="mb-6 text-2xl font-semibold">Market Analysis</h2>

          <Form.Item
            label="Industry Overview"
            name="industryOverview"
            rules={[
              { required: true, message: "Industry Overview is required!" },
            ]}
          >
            <TextArea maxLength={1000} placeholder="Enter Industry Overview" />
          </Form.Item>

          <Form.Item
            label="Market Needs"
            name="marketNeeds"
            rules={[{ required: true, message: "Market Needs are required!" }]}
          >
            <TextArea maxLength={500} placeholder="Enter Market Needs" />
          </Form.Item>

          <Form.Item
            label="Regulatory Environment"
            name="regulatoryEnvironment"
            rules={[
              {
                required: true,
                message: "Regulatory Environment is required!",
              },
            ]}
          >
            <TextArea
              maxLength={500}
              placeholder="Enter Regulatory Environment"
            />
          </Form.Item>
        </section>

        {/* Target Market Section */}
        <section
          className="registration-form-border mb-8 rounded-lg bg-white p-6"
          id="target_market"
        >
          <h2 className="mb-6 text-2xl font-semibold">Target Market</h2>

          <Form.Item
            label="Customer Segmentation"
            name="customerSegmentation"
            rules={[
              { required: true, message: "Customer Segmentation is required!" },
            ]}
          >
            <TextArea
              maxLength={500}
              placeholder="Enter Customer Segmentation"
            />
          </Form.Item>

          <Form.Item
            label="Market Size and Potential"
            name="marketSize"
            rules={[
              {
                required: true,
                message: "Market Size and Potential are required!",
              },
            ]}
          >
            <TextArea
              maxLength={500}
              placeholder="Enter Market Size and Potential"
            />
          </Form.Item>

          <Form.Item
            label="Customer Needs and Preferences"
            name="customerNeeds"
            rules={[
              {
                required: true,
                message: "Customer Needs and Preferences are required!",
              },
            ]}
          >
            <TextArea
              maxLength={500}
              placeholder="Enter Customer Needs and Preferences"
            />
          </Form.Item>

          <Form.Item
            label="Market Positioning"
            name="marketPositioning"
            rules={[
              { required: true, message: "Market Positioning is required!" },
            ]}
          >
            <TextArea maxLength={500} placeholder="Enter Market Positioning" />
          </Form.Item>
        </section>

        {/* Competitive Advantage Section */}
        <section
          className="registration-form-border mb-8 rounded-lg bg-white p-6"
          id="competitive_advantage"
        >
          <h2 className="mb-6 text-2xl font-semibold">Competitive Advantage</h2>

          <Form.Item
            label="Competitive Landscape"
            name="competitiveLandscape"
            rules={[
              { required: true, message: "Competitive Landscape is required!" },
            ]}
          >
            <TextArea
              maxLength={500}
              placeholder="Enter Competitive Landscape"
            />
          </Form.Item>

          <Form.Item
            label="Unique Selling Proposition"
            name="uniqueSellingProposition"
            rules={[
              {
                required: true,
                message: "Unique Selling Proposition is required!",
              },
            ]}
          >
            <TextArea
              maxLength={500}
              placeholder="Enter Unique Selling Proposition"
            />
          </Form.Item>
        </section>

        {/* Growth Strategy Section */}
        <section
          className="registration-form-border mb-8 rounded-lg bg-white p-6"
          id="growth_strategy"
        >
          <h2 className="mb-6 text-2xl font-semibold">Growth Strategy</h2>

          <Form.Item
            label="Short-Term Goals (1-2 years)"
            name="shortTermGoals"
            rules={[
              { required: true, message: "Short-Term Goals are required!" },
            ]}
          >
            <TextArea maxLength={500} placeholder="Enter Short-Term Goals" />
          </Form.Item>

          <Form.Item
            label="Long-Term Goals (3-5 years)"
            name="longTermGoals"
            rules={[
              { required: true, message: "Long-Term Goals are required!" },
            ]}
          >
            <TextArea maxLength={500} placeholder="Enter Long-Term Goals" />
          </Form.Item>

          <Form.Item
            label="Key Initiatives"
            name="keyInitiatives"
            rules={[
              { required: true, message: "Key Initiatives are required!" },
            ]}
          >
            <TextArea maxLength={500} placeholder="Enter Key Initiatives" />
          </Form.Item>

          <Form.Item
            label="KPIs (Key Performance Indicators)"
            name="kpis"
            rules={[{ required: true, message: "KPIs are required!" }]}
          >
            <TextArea maxLength={300} placeholder="Enter KPIs" />
          </Form.Item>

          <Form.Item
            label="Development Milestones"
            name="developmentMilestones"
            rules={[
              {
                required: true,
                message: "Development Milestones are required!",
              },
            ]}
          >
            <TextArea
              maxLength={500}
              placeholder="Enter Development Milestones"
            />
          </Form.Item>

          <Form.Item
            label="Upcoming Milestones"
            name="upcomingMilestones"
            rules={[
              { required: true, message: "Upcoming Milestones are required!" },
            ]}
          >
            <TextArea maxLength={500} placeholder="Enter Upcoming Milestones" />
          </Form.Item>

          <Form.Item
            label="Timeline for Milestones"
            name="timelineForMilestones"
            rules={[
              {
                required: true,
                message: "Timeline for Milestones is required!",
              },
            ]}
          >
            <DatePicker.RangePicker placeholder={["Start Date", "End Date"]} />
          </Form.Item>
        </section>

        {/* Submit Button */}
        <div className="mt-20 flex space-x-4">
          <Button type="primary" htmlType="submit" size="large">
            Continue
          </Button>
        </div>
      </Form>
    </div>
  );
}
