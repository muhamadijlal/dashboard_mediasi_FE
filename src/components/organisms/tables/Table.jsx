import Paginator from "@molecules/pagination/Paginator";
import Card from "@components/molecules/Card";

function Table({ meta, handleLimit, children }) {
  return (
    <Card>
      <div className="mx-2 mb-5">
        <select
          className="select select-bordered select-xs mt-5 w-full max-w-[70px]"
          defaultValue={10}
          onChange={(e) => handleLimit(e.target.value)}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
          <option value={500}>500</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra table-xs">{children}</table>
      </div>

      <Paginator meta={meta} />
    </Card>
  );
}

function Header({ children }) {
  return <thead>{children}</thead>;
}

function Body({ listData, columns, loading, currentPage, itemsPerPage }) {
  return (
    <tbody>
      {loading ? (
        <tr>
          <td className="p-3 text-center" colSpan={columns.length}>
            Loading...
          </td>
        </tr>
      ) : listData.length > 0 ? (
        listData.map((item, index) => (
          <tr key={index} className="text-center">
            {/* Render data dynamically based on columns */}
            {columns.map((col, colIndex) => (
              <td key={colIndex} className="max-w-xs break-words p-3">
                {col.field == "no"
                  ? (currentPage - 1) * itemsPerPage + index + 1
                  : item[col.field]}
              </td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td className="p-3 text-center" colSpan={columns.length}>
            Data not found
          </td>
        </tr>
      )}
    </tbody>
  );
}

Table.Header = Header;
Table.Body = Body;

export default Table;
