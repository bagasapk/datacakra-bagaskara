import { MenuFoldOutlined, MenuOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, Menu, Popover } from "antd";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { IcLogo } from "../assets/icons";
import {
  ACCESS_TOKEN,
  URL_CATEGORY,
  URL_CONTENT_MANAGEMENT,
  URL_DASHBOARD,
  URL_DESTINATION,
  URL_LOGIN,
} from "../constants/config";
import { useStore } from "../stores/stores";

const Header = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const { user } = useStore();

  const [open, setOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 shadow-lg">
      <div className="flex items-center justify-between p-4 bg-primary">
        <div className="flex gap-10">
          <a
            href={URL_DASHBOARD}
            className="text-2xl font-amarante font-bold flex items-center"
          >
            <IcLogo />
            Travel App
          </a>
          <Menu
            className="hidden! sm:block! w-[200px] bg-transparent!"
            mode="horizontal"
            selectedKeys={[pathname]}
            items={[
              {
                key: URL_CATEGORY,
                type: "item",
                label: <Link to={URL_CATEGORY}>Category</Link>,
              },
              {
                key: URL_DESTINATION,
                type: "item",
                label: <Link to={URL_DESTINATION}>Destination</Link>,
              },
            ]}
          ></Menu>
        </div>
        <div className="flex gap-4 items-center">
          <Dropdown
          className="sm:hidden!"
            menu={{
              items: [
                {
                  key: URL_CATEGORY,
                  type: "item",
                  label: <Link to={URL_CATEGORY}>Category</Link>,
                },
                {
                  key: URL_DESTINATION,
                  type: "item",
                  label: <Link to={URL_DESTINATION}>Destination</Link>,
                },
              ],
            }}
          >
            <Button icon={<MenuOutlined />}></Button>
          </Dropdown>
          <Popover
            content={
              <div>
                <div className="text-center p-4 border-2 rounded border-secondary">
                  <p>
                    Username:{" "}
                    <span className="font-medium">{user?.username}</span>
                  </p>
                  <p>
                    Email: <span className="font-medium">{user?.email}</span>
                  </p>
                </div>
                <Button
                  icon={<MenuFoldOutlined />}
                  type="primary"
                  className="mt-4 w-full"
                  onClick={() => navigate(URL_CONTENT_MANAGEMENT)}
                >
                  Content Management
                </Button>
                <Button
                  onClick={() => {
                    localStorage.removeItem(ACCESS_TOKEN);
                    navigate(URL_LOGIN);
                  }}
                  type="primary"
                  danger
                  className="block w-full mt-4"
                >
                  Logout
                </Button>
              </div>
            }
            open={open}
            onOpenChange={setOpen}
            trigger={"click"}
            className="cursor-pointer"
          >
            <Avatar size={"large"} className="bg-blue!">
              {user?.username.slice(0, 1).toLocaleUpperCase()}
            </Avatar>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default Header;
