import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import Link from "antd/es/typography/Link";
import Heading from "../../components/Heading";
import { URL_REGISTER } from "../../constants/config";
import useLogin from "./queries/useLogin";

const Login = () => {
  const { form, handleFinish, isLoading } = useLogin();
  return (
    <Card className="shadow-lg sm:w-3/4 w-full">
      <div className="text-center mb-6">
        <Heading className="!mb-2">Sign In</Heading>
        <p className="font-amarante">Sign in to pick up where you left off</p>
      </div>
      <Form
        form={form}
        onFinish={handleFinish}
        name="Login"
        layout="vertical"
        size="large"
        requiredMark={false}
      >
        <Form.Item
          name="identifier"
          label="Username / Email Address"
          rules={[
            {
              required: true,
              message: "Username / Email Address is required!",
            },
            { min: 8, message: "Minimal 8 characters!" },
          ]}
        >
          <Input
            prefix={<UserOutlined />}
            placeholder="Input Username / Email Address"
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            { required: true, message: "Password is required!" },
            { min: 8, message: "Minimal 8 characters!" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Input password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </Form.Item>
        <Form.Item className="mb-4">
          <Button
            type="primary"
            htmlType="submit"
            className="w-full h-12 mt-4 text-base font-medium"
            loading={isLoading}
          >
            {isLoading ? "Signing in" : "Sign in"}
          </Button>
        </Form.Item>
        <div className="text-center">
          <p>
            Create new account?{" "}
            <Link
              href={URL_REGISTER}
              className="text-primary hover:underline font-medium"
            >
              Sign up
            </Link>
          </p>
        </div>
      </Form>
    </Card>
  );
};

export default Login;
