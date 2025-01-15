import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "@templates/layouts/Layouts";
import StickyNavbar from "@organisms/navigation/navbar/StickyNavbar";
import Sidebar from "@organisms/navigation/Sidebar";
import TransaksiDetail from "@pages/TransaksiDetail";
import RekapAT4 from "@pages/RekapAT4";
import RekapPendapatan from "@pages/RekapPendapatan";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Layouts>
        <Layouts.Content>
          <StickyNavbar />

          {/* Define the routes */}
          <Routes>
            <Route path="/" element={<TransaksiDetail />} />
            <Route path="/transaksi_detail" element={<TransaksiDetail />} />
            <Route path="/rekap_at4" element={<RekapAT4 />} />
            <Route path="/rekap_pendapatan" element={<RekapPendapatan />} />
            {/* Add more routes as needed */}
          </Routes>
        </Layouts.Content>
        <Sidebar />

        <ToastContainer
          stacked
          position="bottom-right"
          autoClose={5000}
          hideProgressBar
          rtl={false}
          theme="light"
        />
      </Layouts>
    </Router>
  );
}

export default App;
