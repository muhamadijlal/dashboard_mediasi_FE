import Title from "@components/atoms/Title";
import Filter from "@components/templates/layouts/form/Filter";
import Table from "@components/organisms/tables/Table";
import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const fieldRekapAt4 = [
  { field: "no" },
  { field: "Shift" },
  { field: "Tunai" },
  { field: "DinasOpr" },
  { field: "DinasKary" },
  { field: "DinasMitra" },
  { field: "eMandiri" },
  { field: "eBri" },
  { field: "eBni" },
  { field: "eBca" },
  { field: "eFlo" },
  { field: "RpTunai" },
  { field: "RpDinasOpr" },
  { field: "RpDinasKary" },
  { field: "RpDinasMitra" },
  { field: "RpeMandiri" },
  { field: "RpeBri" },
  { field: "RpeBni" },
  { field: "RpeBca" },
  { field: "RpeFlo" },
];

function RekapAT4() {
  // State initialization
  const today = new Date().toISOString().split("T")[0];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10); // Default limit to 10
  const [filter, setFilter] = useState({
    ruas: "",
    gerbang: "",
    start_date: today,
    end_date: today,
  });
  const [meta, setMeta] = useState({
    prev_page_url: null,
    next_page_url: null,
    total: 0,
    lastPage: 1,
    currentPage: 1,
    handlePage: setCurrentPage,
  });

  const isFilterValid = ({ ruas, gerbang, start_date, end_date }) => {
    return ruas && gerbang && start_date && end_date;
  };

  // Fetch data when currentPage or limit changes
  useEffect(() => {
    if (isFilterValid(filter) && limit) {
      fetchData(
        filter.ruas,
        filter.gerbang,
        filter.start_date,
        filter.end_date,
        limit,
      );
    }
  }, [currentPage, limit]);

  // Handle filter submit
  function handleFilterSubmit(filter) {
    fetchData(
      filter.ruas,
      filter.gerbang,
      filter.start_date,
      filter.end_date,
      limit,
    );
  }
  // Fetch data from API
  const fetchData = async (
    ruas_id,
    gerbang_id,
    start_date,
    end_date,
    limit,
  ) => {
    try {
      setLoading(true);

      const response = await axios.post(
        `${env.API_URL}/rekap_at4/getData${currentPage !== 1 ? "?page=" + currentPage : ""}`,
        { ruas_id, gerbang_id, start_date, end_date, limit },
      );

      const {
        data: dataList,
        prev_page_url,
        next_page_url,
        total,
        links,
        last_page,
      } = response.data.data;

      setMeta((prevState) => ({
        ...prevState,
        prev_page_url,
        next_page_url,
        total,
        links,
        lastPage: last_page,
        currentPage,
      }));
      setData(dataList);
      setLoading(false);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Something went wrong!";
      setLoading(false);
      toast.error(errorMessage, {
        stack: true,
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        theme: "light",
      });
    }
  };

  return (
    <div className="h-screen max-w-[100vw] px-6 pb-16">
      <Title name="Rekap AT4" />
      <Filter
        filter={filter}
        setFilter={setFilter}
        onSubmit={handleFilterSubmit}
        isDisabled={loading}
      />
      <Table meta={meta} handleLimit={setLimit}>
        <Table.Header>
          <tr className="text-center">
            <th colSpan="11">Lalin</th>
            <th colSpan="9">Pendapatan</th>
          </tr>
          <tr className="text-center">
            <th>No</th>
            <th>Shift</th>
            <th>Tunai</th>
            <th>Dinas Opr</th>
            <th>Dinas Kary</th>
            <th>Dinas Mitra</th>
            <th>Mandiri</th>
            <th>Bri</th>
            <th>Bni</th>
            <th>Bca</th>
            <th>Flo</th>
            <th>Tunai</th>
            <th>Dinas Opr</th>
            <th>Dinas Kary</th>
            <th>Dinas Mitra</th>
            <th>Mandiri</th>
            <th>Bri</th>
            <th>Bni</th>
            <th>Bca</th>
            <th>BcaFlo</th>
          </tr>
        </Table.Header>
        <Table.Body
          itemsPerPage={limit}
          currentPage={currentPage}
          loading={loading}
          columns={fieldRekapAt4}
          listData={data}
        />
      </Table>
    </div>
  );
}

export default RekapAT4;
