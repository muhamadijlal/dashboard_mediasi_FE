import Button from "@atoms/Button";
import Card from "@molecules/Card";
import useFetchSelectData from "@hooks/useFetchSelectedData";
import FormInput from "@components/molecules/input/FormInput";
import FormSelect from "@components/molecules/select/FormSelect";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function Filter({ onSubmit, isDisabled, filter, setFilter }) {
  const {
    loading,
    dataRuas,
    dataGerbang,
    selectedRuas,
    selectedGerbang,
    setSelectedRuas,
    setSelectedGerbang,
  } = useFetchSelectData();

  // Update the filter state when selectedRuas or selectedGerbang change
  useEffect(() => {
    setFilter((prevState) => ({
      ...prevState,
      ruas: selectedRuas,
      gerbang: selectedGerbang,
    }));
  }, [selectedRuas, selectedGerbang]);

  // Handle form input changes
  function handleFilter(e) {
    const { name, value } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // Handle form submit
  function handleFilterSubmit(e) {
    e.preventDefault();

    if (filter.ruas === "" || filter.gerbang === "") {
      toast.error(
        `Filter ${filter.ruas === "" ? "ruas dan" : ""} ${filter.gerbang === "" ? "gerbang" : ""} perlu diisi`,
        {
          stacked: true,
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: true,
          theme: "light",
        },
      );
      return;
    }

    if (onSubmit) {
      onSubmit(filter);
    }
  }

  return (
    <Card>
      <form
        className="flex flex-col items-end justify-around gap-5 sm:flex-row"
        onSubmit={handleFilterSubmit}
      >
        <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4">
          {/* Ruas Select */}
          <FormSelect
            isDisabled={loading}
            name="ruas"
            labelName="Ruas"
            placeholder={loading ? `loading...` : `--Pilih Ruas--`}
            options={dataRuas}
            handleChange={(value) => {
              setSelectedRuas(value);
              setFilter((prevState) => ({ ...prevState, ruas: value }));
            }}
          />

          {/* Gerbang Select */}
          <FormSelect
            name="gerbang"
            labelName="Gerbang"
            placeholder={loading ? "Loading..." : "--Pilih Gerbang--"}
            options={dataGerbang}
            handleChange={(value) => {
              setSelectedGerbang(value);
              setFilter((prevState) => ({ ...prevState, gerbang: value }));
            }}
            isDisabled={!filter.ruas || loading}
          />

          {/* Start Date Input */}
          <FormInput
            type="date"
            name="start_date"
            labelName="Tanggal mulai"
            value={filter.start_date}
            handleChange={handleFilter}
          />

          {/* End Date Input */}
          <FormInput
            type="date"
            name="end_date"
            labelName="Tanggal berakhir"
            value={filter.end_date}
            handleChange={handleFilter}
          />
        </div>

        <Button name="filter" isDisabled={isDisabled} />
      </form>
    </Card>
  );
}

export default Filter;
