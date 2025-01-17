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
        <Route element={<Layouts />}>
          <Route path="/" element={<TransaksiDetail />} />
          {/* Redirect from / to /transaksi_detail */}
          <Route path="/transaksi_detail" element={<TransaksiDetail />} />
          <Route path="/rekap_at4" element={<RekapAT4 />} />
          {/* <Route path="/rekap_pendapatan" element={<RekapPendapatan />} /> */}
          <Route path="/data_compare" element={<DataCompare />} />
        </Route>
        <Route path="/*" element={<PageNotFound />} />{" "}
        {/* Catch-all for unknown routes */}
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
