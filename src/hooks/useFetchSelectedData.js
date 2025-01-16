import { useState, useEffect } from "react";
import axios from "axios";

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
        console.error("Error fetching data Ruas:", error);
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
        console.error("Error fetching data Gerbang:", error);
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
