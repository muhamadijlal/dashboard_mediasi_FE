import Title from "@components/atoms/Title";
import Filter from "@components/templates/layouts/form/Filter";
import Table from "@components/organisms/tables/Table";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

function TransaksiDetail() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [limit, setLimit] = useState(20);

  function handleFilterSubmit(filter) {
    setPage(1);
    fetchGerbangData(
      filter.ruas,
      filter.gerbang,
      filter.start_date,
      filter.end_date,
      1,
    );
  }

  const fetchGerbangData = async (
    ruas_id,
    gerbang_id,
    start_date,
    end_date,
    currentPage,
  ) => {
    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/transaksi_detail/getData",
        {
          ruas_id,
          gerbang_id,
          start_date,
          end_date,
          page: currentPage,
          limit: limit,
        },
      );

      const {
        data: dataList,
        current_page,
        last_page,
      } = await response.data.data;

      setData(dataList);
      setPage(current_page);
      setLastPage(last_page);
      setLoading(false);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong!";
      setLoading(false);
      toast.error(errorMessage, {
        stacked: true,
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "light",
      });
    }
  };

  // Fungsi untuk mengubah halaman
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > lastPage) return; // Validasi jika halaman di luar range
    setPage(newPage);
    fetchGerbangData(
      null,
      null,
      null,
      null,
      newPage, // Panggil API dengan halaman yang baru
    );
  };

  return (
    <div className="h-screen max-w-[100vw] px-6 pb-16">
      <Title name="Transaksi Detail" />
      <Filter onSubmit={handleFilterSubmit} isDisabled={loading} />
      <Table listData={data} loading={loading} />
    </div>
  );
}

export default TransaksiDetail;
