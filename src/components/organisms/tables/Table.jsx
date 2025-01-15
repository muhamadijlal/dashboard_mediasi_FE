import Pagination from "@molecules/pagination/Pagination";
import Card from "@components/molecules/Card";

function Table({ listData, loading }) {
  return (
    <Card>
      <div className="overflow-x-auto">
        <table className="table table-zebra table-xs">
          <thead>
            <tr className="text-center">
              <th>No</th>
              <th>Gardu</th>
              <th>Shift</th>
              <th>Perioda</th>
              <th>No Resi</th>
              <th>Golongan</th>
              <th>Metode Bayar</th>
              <th>Jenis Notran</th>
              <th>Etoll</th>
              <th>Tarif</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="p-3 text-center" colSpan="10">
                  Loading...
                </td>
              </tr>
            ) : listData.length > 0 ? (
              listData.map((item, index) => (
                <tr key={index} className="text-center">
                  <th>{index + 1}</th>
                  <td className="max-w-xs break-words p-3">{item.gardu_id}</td>
                  <td className="max-w-xs break-words p-3">{item.shift}</td>
                  <td className="max-w-xs break-words p-3">{item.perioda}</td>
                  <td className="max-w-xs break-words p-3">{item.no_resi}</td>
                  <td className="max-w-xs break-words p-3">{item.gol}</td>
                  <td className="max-w-xs break-words p-3">
                    {item.metoda_bayar_id}
                  </td>
                  <td className="max-w-xs break-words p-3">
                    {item.notran_id_sah}
                  </td>
                  <td className="max-w-xs break-words p-3">
                    {item.etoll_hash}
                  </td>
                  <td className="max-w-xs break-words p-3">{item.tarif}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="p-3 text-center" colSpan="10">
                  Data not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Pagination />
    </Card>
  );
}

export default Table;
