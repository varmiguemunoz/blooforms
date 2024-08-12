import SideBar from "@/components/SideBar";
import Wrapper from "@/layouts/Wrapper";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <Wrapper name={"Blooforms"} sideBarContent={<SideBar />}>
      <Outlet />
    </Wrapper>
  );
}
