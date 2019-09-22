import React from "react";

import {
  Form,
  Input,
  Tooltip,
  Icon,
  Cascader,
  Button
} from "antd";

const promoTypes = [
  {
    value: "Monthly Category",
    label: "Monthly expenditure by Category"
  },
  {
    value: "Monthly Specific",
    label: "Monthly expenditure by Specific brand"
  },
  {
    value: "Daily Specific",
    label: "Daily expenditure by Specific brand"
  }
];

const Month = [
  {
    value: "January",
    label: "January"
  },
  {
    value: "February",
    label: "February"
  },
  {
    value: "March",
    label: "March"
  },
  {
    value: "April",
    label: "April"
  },
  {
    value: "May",
    label: "May"
  },
  {
    value: "June",
    label: "June"
  },
  {
    value: "July",
    label: "July"
  },
  {
    value: "August",
    label: "August"
  },
  {
    value: "September",
    label: "September"
  },
  {
    value: "October",
    label: "October"
  },
  {
    value: "November",
    label: "November"
  },
  {
    value: "December",
    label: "December"
  }
];

const Day = [{value:1, label:1}, {value:2, label:2}, {value:3, label:3}, {value:4, label:4}, {value:5, label:5}, 
  {value:6, label:6}, {value:7, label:7}, {value:8, label:8}];

class RegistrationForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
  };

  handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };
    const numberItemLayout={
      wrapperCol:{
        xs: {span: 24},
        sm: {span: 2}
      }
    }
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 6
        }
      }
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="Business name">
          {getFieldDecorator("name")(<Input />)}
        </Form.Item>
        <Form.Item label="Promotion type">
          {getFieldDecorator("type", {
            initialValue: ["Monthly Category"],
            rules: [{ type: "array" }]
          })(<Cascader options={promoTypes} />)}
        </Form.Item>
        <Form.Item
          label="Promotion name">
          {getFieldDecorator("desc")(<Input />)}
        </Form.Item>
        <Form.Item label="Month">
          {getFieldDecorator("month", {
            initialValue: ["January"],
            rules: [{ type: "array" }]
          })(<Cascader options={Month} />)}
        </Form.Item>
        <Form.Item {...numberItemLayout}
          label={
            <span>
              Minimum Monthly Amount spent
            </span>
          } >
          {getFieldDecorator("Minimum Monthly Amount spent")(<Input />)}
        </Form.Item>
        <Form.Item {...numberItemLayout}
          label={
            <span>
              Discount Percentage
              <Tooltip title="What percentage of discount do you want to offer?">
                <Icon type="percentage" />
              </Tooltip>
            </span>
          }
        >
          {getFieldDecorator("discount_percent", {
            rules: [
              {
                required: true,
                message: "Please input a discount you want to offer!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </Form.Item>
        <Form.Item {...numberItemLayout} label="Day">
          {getFieldDecorator("Day", {
            initialValue: [1],
            rules: [{ type: "array" }]
          })(<Cascader options={Day} />)}
        </Form.Item>
        <Form.Item {...numberItemLayout}
          label={
            <span>
              QR code id
            </span>
          } >
          {getFieldDecorator("qr_code_id")(<Input />)}
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedRegistrationForm = Form.create({ name: "register" })(
  RegistrationForm
);

export default WrappedRegistrationForm;
