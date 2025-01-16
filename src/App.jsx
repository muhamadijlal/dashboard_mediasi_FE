import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "@templates/layouts/Layouts";
import TransaksiDetail from "@pages/TransaksiDetail";
import RekapAT4 from "@pages/RekapAT4";
import RekapPendapatan from "@pages/RekapPendapatan";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layouts />}>
            <Route index element={<TransaksiDetail />} />
            <Route path="/transaksi_detail" element={<TransaksiDetail />} />
            <Route path="/rekap_at4" element={<RekapAT4 />} />
            <Route path="/rekap_pendapatan" element={<RekapPendapatan />} />
          </Route>
        </Routes>
      </Router>

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
