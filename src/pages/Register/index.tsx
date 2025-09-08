import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  MailOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import Heading from "../../components/Heading";
import useRegister from "./queries/useRegister";
import Link from "antd/es/typography/Link";
import { URL_LOGIN } from "../../constants/config";

const Register = () => {
  const { form, handleFinish, validateConfirmPassword, isLoading } =
    useRegister();
  return (
    <Card className="sm:w-3/4 w-full shadow-lg">
      <div className="text-center mb-6">
        <Heading className="!mb-2">Register</Heading>
        <p className="font-amarante">Join the Trip!</p>
      </div>

      <Form
        form={form}
        onFinish={handleFinish}
        name="register"
        layout="vertical"
        size="large"
        requiredMark={false}
      >
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Email is required!" },
            { type: "email", message: "Email invalid" },
          ]}
        >
          <Input
            prefix={<MailOutlined className="pr-1" />}
            placeholder="Input email"
          />
        </Form.Item>
        <Form.Item
          name="username"
          label="Username"
          rules={[
            { required: true, message: "Username is required!" },
            { min: 8, message: "Minimum 8 characters required" },
          ]}
        >
          <Input
            prefix={<UserOutlined className="pr-1" />}
            placeholder="Input Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Password is required!" },
            { min: 8, message: "Password minimal 8 karakter!" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="pr-1" />}
            placeholder="Input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item
          name="confirmPassword"
          label="Confirm Password"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Confirm password is required!" },
            { validator: validateConfirmPassword },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="pr-1" />}
            placeholder="Confirm password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>

        <Form.Item className="mb-4">
          <Button
            type="primary"
            htmlType="submit"
            className="w-full h-12 text-base font-medium"
            loading={isLoading}
          >
            {isLoading ? "Signing Up" : "Sign Up"}
          </Button>
        </Form.Item>

        <div className="text-center">
          <p>
            Already have account?{" "}
            <Link
              href={URL_LOGIN}
              className="text-primary hover:underline font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </Form>
    </Card>
  );
};

export default Register;
