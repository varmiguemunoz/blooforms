import { FC } from "react";

// ICONS
import { MdOutlineSettingsSuggest } from "react-icons/md";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { PiChatsDuotone } from "react-icons/pi";
import { LuWorkflow } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
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
    title: "Bloomify Tech",
    items: [
      {
        url: "/dashboard",
        title: "Chats",
      },
      {
        url: "/automation",
        title: "Automatizaciones",
      },
      {
        url: "/config",
        title: "Configuraciones",
      },
    ],
  },
];

const getIcon = (url: string) => {
  switch (url) {
    case "/automation":
      return <LuWorkflow size="20" />;
    case "/config":
      return <MdOutlineSettingsSuggest size="20" />;
    case "/dashboard":
      return <PiChatsDuotone size="20" />;
    default:
      return null;
  }
};

const SideBar: FC<SideBarProps> = ({ closeEvent, signOut }) => {
  const location = useLocation();

  return (
    <div className="w-full h-full flex flex-col items-center justify-between px-[15px] py-[25px]">
      <div className="flex flex-col sm:justify-center justify-between items-center">
        <Link to="/home/dashboard" className="mb-[30px]">
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
                <Link to={`/dashboard${item.url}`} key={item.url}>
                  <div
                    className={`text-sm text-darkGray flex flex-col justify-center items-center p-2.5 ${
                      location.pathname.endsWith(item.url) &&
                      "bg-basePurple text-white rounded-[10px]"
                    }`}
                  >
                    {getIcon(item.url)}
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
