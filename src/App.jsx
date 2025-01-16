import { Routes, Route } from "react-router-dom";
import Layouts from "@templates/layouts/Layouts";
import TransaksiDetail from "@pages/TransaksiDetail";
import RekapAT4 from "@pages/RekapAT4";
import RekapPendapatan from "@pages/RekapPendapatan";
import { ToastContainer } from "react-toastify";
import PageNotFound from "@components/pages/handle/PageNotFound";
import DataCompare from "@components/pages/DataCompare";

function App() {
  return (
    <>
      <Routes>
        <Route element={<div>Login page</div>} />
        <Route element={<Layouts />}>
          <Route index element={<TransaksiDetail />} />
          <Route path="/transaksi_detail" element={<TransaksiDetail />} />
          <Route path="/rekap_at4" element={<RekapAT4 />} />
          {/* <Route path="/rekap_pendapatan" element={<RekapPendapatan />} /> */}
          <Route path="/data_compare" element={<DataCompare />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />
      </Routes>

      <ToastContainer
        stacked={true}
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={true}
        theme="light"
      />
    </>
  );
}

export default App;
