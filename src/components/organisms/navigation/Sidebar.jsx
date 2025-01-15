import ListMenu from "@molecules/menu/ListMenu";
import NavbarTitle from "@organisms/navigation/navbar/NavbarTitle";
import { TbReport, TbReportMoney, TbReportAnalytics } from "react-icons/tb";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();
  const current_url = location.pathname;

  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <aside className="min-h-full w-64 bg-base-100 p-4">
        <ul className="text-base-content">
          <NavbarTitle
            title="daisyUI"
            version="1.0.0"
            showTitle="hidden lg:block"
          />
          <h4 className="h-4"></h4>
          <ListMenu
            isActive={
              current_url === "/transaksi_detail" || current_url === "/"
            }
            link="/transaksi_detail"
            Icon={TbReportAnalytics}
            name="Transaksi Detail"
            color="blue"
          />
          <ListMenu
            isActive={current_url === "/rekap_at4"}
            link="/rekap_at4"
            Icon={TbReport}
            name="Rekap AT4"
            color="purple"
          />
          <ListMenu
            isActive={current_url === "/rekap_pendapatan"}
            link="/rekap_pendapatan"
            Icon={TbReportMoney}
            name="Rekap Pendapatan"
            color="green"
          />
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;
