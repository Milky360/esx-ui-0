"use client";

import { Button, Checkbox, Form, Input, Select, Upload } from "antd";

const { Option } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;

export default function CampaignInformationForm() {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log("Form submitted with values:", values);
  };

  return (
    <div className="rounded-lg border-none bg-transparent px-10">
      <Form form={form} layout="vertical" onFinish={handleSubmit}>
        {/* Business Information */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Business Information</h2>

          <Form.Item
            label="Business Overview"
            name="business_overview"
            rules={[
              { required: true, message: "Business Overview is required!" },
            ]}
          >
            <TextArea placeholder="Enter Business Overview" rows={4} />
          </Form.Item>

          <Form.Item
            label="Principal Activities"
            name="principal_activities"
            rules={[
              { required: true, message: "Principal Activities are required!" },
            ]}
          >
            <TextArea placeholder="Enter Principal Activities" rows={4} />
          </Form.Item>

          <Form.Item
            label="Principal Market"
            name="principal_market"
            rules={[
              { required: true, message: "Principal Market is required!" },
            ]}
          >
            <TextArea placeholder="Enter Principal Market" rows={4} />
          </Form.Item>

          <Form.Item
            label="Auditor"
            name="auditor"
            rules={[{ required: true, message: "Auditor is required!" }]}
          >
            <Input placeholder="Enter Auditor's Name" />
          </Form.Item>
        </section>

        {/* Financial Information */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Financial Information</h2>

          <Form.Item
            label="Total Assets"
            name="total_assets"
            rules={[{ required: true, message: "Total Assets are required!" }]}
          >
            <Input type="number" step="0.01" placeholder="Enter Total Assets" />
          </Form.Item>

          <Form.Item
            label="Total Liabilities"
            name="total_liabilities"
            rules={[
              { required: true, message: "Total Liabilities are required!" },
            ]}
          >
            <Input
              type="number"
              step="0.01"
              placeholder="Enter Total Liabilities"
            />
          </Form.Item>

          <Form.Item
            label="Revenue"
            name="revenue"
            rules={[{ required: true, message: "Revenue is required!" }]}
          >
            <Input type="number" step="0.01" placeholder="Enter Revenue" />
          </Form.Item>

          <Form.Item
            label="Net Profit"
            name="net_profit"
            rules={[{ required: true, message: "Net Profit is required!" }]}
          >
            <Input type="number" step="0.01" placeholder="Enter Net Profit" />
          </Form.Item>
        </section>

        {/* Project Overview */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Project Overview</h2>

          <Form.Item
            label="Project Name"
            name="project_name"
            rules={[{ required: true, message: "Project Name is required!" }]}
          >
            <Input placeholder="Enter Project Name" />
          </Form.Item>

          <Form.Item
            label="Objectives"
            name="objectives"
            rules={[{ required: true, message: "Objectives are required!" }]}
          >
            <TextArea placeholder="Enter Objectives" rows={4} />
          </Form.Item>

          <Form.Item
            label="Summary"
            name="summary"
            rules={[{ required: true, message: "Summary is required!" }]}
          >
            <TextArea placeholder="Enter Summary" rows={4} />
          </Form.Item>

          <Form.Item
            label="Address"
            name="address"
            rules={[{ required: true, message: "Address is required!" }]}
          >
            <TextArea
              placeholder="Enter Physical Address and Geolocation"
              rows={4}
            />
          </Form.Item>
        </section>

        {/* Team Information */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Team Information</h2>

          <Form.Item
            label="Full Name"
            name="full_name"
            rules={[{ required: true, message: "Full Name is required!" }]}
          >
            <Input placeholder="Enter Full Name" />
          </Form.Item>

          <Form.Item
            label="Education"
            name="education"
            rules={[{ required: true, message: "Education is required!" }]}
          >
            <Input placeholder="Enter Education" />
          </Form.Item>

          <Form.Item
            label="Sex"
            name="sex"
            rules={[{ required: true, message: "Sex is required!" }]}
          >
            <Select placeholder="Select Sex">
              <Option value="Male">Male</Option>
              <Option value="Female">Female</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Experience"
            name="experience"
            rules={[{ required: true, message: "Experience is required!" }]}
          >
            <TextArea placeholder="Enter Experience" rows={4} />
          </Form.Item>
        </section>
        {/* Supporting Information */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Supporting Information
          </h2>

          <Form.Item label="Statistics or Analysis" name="statistics">
            <TextArea placeholder="Enter Statistics or Analysis" rows={4} />
          </Form.Item>

          <Form.Item label="Copyright Information" name="copyright">
            <TextArea placeholder="Enter Copyright Information" rows={4} />
          </Form.Item>

          <Form.Item label="Other Information (Optional)" name="other_info">
            <TextArea
              placeholder="Enter any other relevant information"
              rows={4}
            />
          </Form.Item>
        </section>

        {/* Business Model */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Business Model</h2>

          <Form.Item label="Revenue Streams" name="revenue_streams">
            <TextArea placeholder="Describe Revenue Streams" rows={4} />
          </Form.Item>

          <Form.Item label="Cost Structure" name="cost_structure">
            <TextArea placeholder="Describe Cost Structure" rows={4} />
          </Form.Item>
        </section>

        {/* Market Analysis */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Market Analysis</h2>

          <Form.Item
            label="Target Market Size"
            name="target_market_size"
            rules={[
              { required: true, message: "Target Market Size is required!" },
            ]}
            hasFeedback
          >
            <Input type="number" placeholder="Enter Target Market Size" />
          </Form.Item>

          <Form.Item
            label="Competitor Analysis"
            name="competitor_analysis"
            hasFeedback
          >
            <TextArea placeholder="Enter Competitor Analysis" rows={4} />
          </Form.Item>
        </section>

        {/* Sales Projections */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Sales Projections</h2>

          <Form.Item label="Sales Volume" name="sales_volume" hasFeedback>
            <Input type="number" placeholder="Enter Estimated Sales Volume" />
          </Form.Item>

          <Form.Item
            label="Pricing Strategy"
            name="pricing_strategy"
            hasFeedback
          >
            <Input placeholder="Enter Pricing Strategy" />
          </Form.Item>
        </section>

        {/* Expense Forecasting */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Expense Forecasting</h2>

          <Form.Item
            label="Operational Expenses"
            name="operational_expenses"
            hasFeedback
          >
            <Input placeholder="Enter Operational Expenses" />
          </Form.Item>

          <Form.Item
            label="Capital Expenditures"
            name="capital_expenditures"
            hasFeedback
          >
            <TextArea placeholder="Enter Capital Expenditures" rows={4} />
          </Form.Item>
        </section>

        {/* Funding Needs */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Funding Needs</h2>

          <Form.Item
            label="Total Capital Required"
            name="total_capital_required"
            rules={[
              {
                required: true,
                message: "Total Capital Required is required!",
              },
            ]}
            hasFeedback
          >
            <Input type="number" placeholder="Enter Total Capital Required" />
          </Form.Item>
        </section>

        {/* Profit and Loss Statement */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Profit and Loss Statement
          </h2>

          <Form.Item
            label="Revenue Projections"
            name="revenue_projections"
            hasFeedback
          >
            <Input type="number" placeholder="Enter Revenue Projections" />
          </Form.Item>

          <Form.Item
            label="Cost Projections"
            name="cost_projections"
            hasFeedback
          >
            <TextArea placeholder="Enter Cost Projections" rows={4} />
          </Form.Item>

          <Form.Item
            label="Break-even Analysis"
            name="break_even_analysis"
            hasFeedback
          >
            <TextArea placeholder="Enter Break-even Analysis" rows={4} />
          </Form.Item>
        </section>

        {/* Cash Flow Projections */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Cash Flow Projections</h2>

          <Form.Item
            label="Inflow Projections"
            name="inflow_projections"
            hasFeedback
          >
            <TextArea placeholder="Enter Inflow Projections" rows={4} />
          </Form.Item>

          <Form.Item
            label="Outflow Projections"
            name="outflow_projections"
            hasFeedback
          >
            <TextArea placeholder="Enter Outflow Projections" rows={4} />
          </Form.Item>

          <Form.Item label="Net Cash Flow" name="net_cash_flow" hasFeedback>
            <Input type="number" placeholder="Enter Net Cash Flow" />
          </Form.Item>
        </section>

        {/* Exit Strategy */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Exit Strategy</h2>

          <Form.Item
            label="Valuation Estimate"
            name="valuation_estimate"
            hasFeedback
          >
            <Input type="number" placeholder="Enter Valuation Estimate" />
          </Form.Item>

          <Form.Item
            label="Investor Returns"
            name="investor_returns"
            hasFeedback
          >
            <TextArea placeholder="Outline Investor Returns" rows={4} />
          </Form.Item>
        </section>

        {/* Assumptions and Risks */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Assumptions and Risks</h2>

          <Form.Item label="Key Assumptions" name="key_assumptions" hasFeedback>
            <TextArea placeholder="List Key Assumptions" rows={4} />
          </Form.Item>

          <Form.Item label="Risk Management" name="risk_management" hasFeedback>
            <TextArea
              placeholder="Identify Key Risks and Mitigation Strategies"
              rows={4}
            />
          </Form.Item>
        </section>

        {/* Visuals and Presentations */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Visuals and Presentations
          </h2>

          <Form.Item
            label="Graphs and Charts"
            name="graphs_and_charts"
            hasFeedback
          >
            <Dragger>
              <p className="ant-upload-drag-icon">
                <i className="fa fa-upload" aria-hidden="true"></i>
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item label="Use of Funds" name="use_of_funds" hasFeedback>
            <TextArea placeholder="Describe the use of funds" rows={4} />
          </Form.Item>

          <Form.Item
            label="Type of Funding Needed"
            name="funding_type"
            hasFeedback
          >
            <Checkbox.Group options={["Equity", "Debt", "Other"]} />
            <Form.Item name="other_funding_explanation">
              <TextArea placeholder="If other, please explain" rows={3} />
            </Form.Item>
          </Form.Item>

          <Form.Item
            label="Own Funds Contribution"
            name="own_funds_contribution"
            hasFeedback
          >
            <Input type="number" placeholder="Enter Own Funds Contribution" />
          </Form.Item>

          <Form.Item
            label="Project Description"
            name="project_description"
            hasFeedback
          >
            <TextArea
              placeholder="Describe the project for which funding is requested"
              rows={4}
            />
          </Form.Item>

          <Form.Item
            label="Utilization of Funds"
            name="utilization_of_funds"
            hasFeedback
          >
            <TextArea
              placeholder="Explain how the funds will be used"
              rows={4}
            />
          </Form.Item>

          <Form.Item
            label="Impact of the Project"
            name="project_impact"
            hasFeedback
          >
            <TextArea
              placeholder="Describe the expected impact of the project"
              rows={4}
            />
          </Form.Item>

          <Form.Item
            label="Current Stage of the Transaction"
            name="transaction_stage"
            hasFeedback
          >
            <TextArea
              placeholder="Explain the progress to date, including key milestones"
              rows={4}
            />
          </Form.Item>

          <Form.Item
            label="Key Risks and Mitigation Steps"
            name="key_risks"
            hasFeedback
          >
            <TextArea
              placeholder="Describe key risks and mitigation steps"
              rows={4}
            />
          </Form.Item>
        </section>

        {/* Financial Projections */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">Financial Projections</h2>

          <Form.Item
            label="Financial Reports/Projections"
            name="financial_reports"
          >
            <Dragger>
              <p className="ant-upload-drag-icon">
                <i className="fa fa-upload" aria-hidden="true"></i>
              </p>
              <p className="ant-upload-text">
                Click or drag file to this area to upload financial reports
                (past 2 years or projections for next 2-3 years)
              </p>
            </Dragger>
          </Form.Item>

          <Form.Item label="Break-Even Analysis" name="break_even_analysis">
            <TextArea
              placeholder="Describe the expected profitability timeline"
              rows={4}
            />
          </Form.Item>

          <Form.Item label="Funding Requirements" name="funding_requirements">
            <TextArea
              placeholder="Explain the capital needed and its intended use"
              rows={4}
            />
          </Form.Item>
        </section>

        {/* Post-Campaign Planning */}
        <section className="registration-form-border mb-8 rounded-lg bg-white p-6">
          <h2 className="mb-6 text-2xl font-semibold">
            Post-Campaign Planning
          </h2>

          <Form.Item label="Use of Funds" name="use_of_funds">
            <TextArea placeholder="Plan for deploying funds raised" rows={4} />
          </Form.Item>

          <Form.Item label="Reporting" name="reporting">
            <TextArea
              placeholder="System for regular updates to investors"
              rows={4}
            />
          </Form.Item>
        </section>

        {/* Final Submit */}
        <Form.Item>
          <Checkbox>Confirm all information is accurate</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit Campaign Information
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
