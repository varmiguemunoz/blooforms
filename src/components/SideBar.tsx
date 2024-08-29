import { FC } from "react";

// ICONS
import { IoMdCloseCircleOutline } from "react-icons/io";
import { LuWorkflow } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

type SideBarProps = {
  closeEvent?: () => void;
  signOut?: () => void;
  groups?: {
    title: string;
    items: {
      label: string;
      url: string;
    }[];
  }[];
};

const MenuRouter = [
  {
    title: "Blooforms",
    items: [
      {
        url: "/home/dashboard",
        title: "Forms",
      },
      {
        url: "/home/customers",
        title: "Customers",
      },
    ],
  },
];

const getIcon = (url: string) => {
  switch (url) {
    case "/home/dashboard":
      return <LuWorkflow size="20" />;
    case "/home/customers":
      return <FaUsers size="20" />;
    default:
      return null;
  }
};

const SideBar: FC<SideBarProps> = ({ closeEvent, signOut }) => {
  const location = useLocation();

  return (
    <div className="w-full h-full flex flex-col items-center justify-between px-[15px] py-[25px]">
      <div className="flex flex-col sm:justify-center justify-between items-center">
        <Link to="/dashboard" className="mb-[30px]">
          <img
            src="/bloomify-logo.png"
            className="bg-cover"
            alt="logo"
            width={60}
            height={60}
            loading="lazy"
          />
        </Link>

        <button className="sm:hidden block" onClick={closeEvent}>
          <IoMdCloseCircleOutline size={28} />
        </button>

        {MenuRouter.map((group) => (
          <div key={group.title}>
            <div>
              {group.items.map((item) => (
                <Link to={`${item.url}`} key={item.url}>
                  <div
                    className={`flex items-center justify-start ${
                      location.pathname.endsWith(item.url) &&
                      "bg-black text-white rounded-[10px]"
                    }`}
                  >
                    <span
                      className={`text-sm text-darkGray flex flex-col justify-center items-center p-2.5`}
                    >
                      {getIcon(item.url)}
                    </span>

                    <p
                      className={`text-lg font-medium text-black ${
                        location.pathname.endsWith(item.url) && " text-white"
                      }`}
                    >
                      {item.title}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <button
        className="text-sm text-darkGray flex flex-col justify-center items-center p-2.5"
        onClick={() => signOut}
      >
        <CiLogout size={20} />
      </button>
    </div>
  );
};

export default SideBar;
