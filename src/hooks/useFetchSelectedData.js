import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useFetchSelectData = () => {
  const [loading, setLoading] = useState(false);
  const [dataRuas, setDataRuas] = useState([]);
  const [dataGerbang, setDataGerbang] = useState([]);
  const [selectedRuas, setSelectedRuas] = useState("");
  const [selectedGerbang, setSelectedGerbang] = useState("");
  // Fetch data untuk select pertama (ruas) dengan Axios
  useEffect(() => {
    const fetchRuasData = async () => {
      setLoading(true);
      try {
        // Gantilah dengan API call yang sesuai menggunakan axios
        const response = await axios.post(`${env.API_URL}/select/getRuas`);
        setDataRuas(response.data.data); // Menyimpan data yang diterima
      } catch (error) {
        const errorMessage =
          error.response?.data?.errors?.ruas_id ||
          error.response?.data?.errors?.gerbang_id ||
          error.message ||
          "Something went wrong!";
        toast.error(errorMessage, {
          stacked: true,
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          theme: "light",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchRuasData();
  }, []); // Fetch hanya sekali saat komponen pertama kali dimuat

  // Fetch data untuk select kedua (gerbang) menggunakan selectedRuas
  useEffect(() => {
    const fetchGerbangData = async () => {
      if (!selectedRuas) return; // Jangan fetch jika belum ada ruas yang dipilih

      setLoading(true);
      try {
        // Gantilah dengan API call yang sesuai menggunakan axios, misalnya berdasarkan selectedRuas
        const response = await axios.post(`${env.API_URL}/select/getGerbang`, {
          ruas_id: selectedRuas,
        });
        setDataGerbang(response.data.data); // Menyimpan data yang diterima
      } catch (error) {
        const errorMessage =
          error.response?.data?.errors?.ruas_id ||
          error.response?.data?.errors?.gerbang_id ||
          error.message ||
          "Something went wrong!";
        toast.error(errorMessage, {
          stacked: true,
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          theme: "light",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchGerbangData();
  }, [selectedRuas]); // Fetch ulang data gerbang setiap kali selectedRuas berubah

  return {
    loading,
    dataRuas,
    dataGerbang,
    selectedRuas,
    selectedGerbang,
    setSelectedRuas,
    setSelectedGerbang,
  };
};

export default useFetchSelectData;
