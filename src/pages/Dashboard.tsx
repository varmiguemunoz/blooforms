import Wrapper from "@/layouts/Wrapper";
import SideBar from "@/components/SideBar";

export default function Dashboard() {
  return (
    <Wrapper
      sideBarContent={<SideBar />}
      name="Blooforms"
      asideTitle="Dashboard"
    >
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
        cumque odit quia placeat, et ab! At, recusandae optio dolores incidunt
        ducimus neque illo temporibus in quo a velit minima harum.
      </h1>
    </Wrapper>
  );
}
