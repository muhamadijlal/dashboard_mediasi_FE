import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

function Paginator({ meta }) {
  const { lastPage, total, currentPage, handlePage } = meta;

  // Helper function to generate the pagination buttons
  const generatePaginationButtons = (start, end) => {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
      .map((page) => Math.max(1, Math.min(page, lastPage))) // Ensure page is between 1 and lastPage
      .map((page) => (
        <button
          key={page}
          onClick={() => handlePage(page)}
          disabled={currentPage === page}
          className="btn join-item btn-sm hidden md:block"
        >
          {page}
        </button>
      ));
  };

  return (
    <div className="mt-10 flex justify-end">
      <div className="join">
        {/* First Page Button */}
        <button
          disabled={currentPage === 1}
          className="btn join-item btn-sm hidden md:block"
          onClick={() => handlePage(1)}
        >
          First Page
        </button>

        {/* Previous Page Button */}
        <button
          disabled={currentPage === 1}
          className="btn join-item btn-sm"
          onClick={() => handlePage(currentPage - 1)}
        >
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>

        {/* Pagination Buttons */}
        {total ? (
          currentPage <= 3 ? (
            // Display first 5 pages if currentPage is 3 or less
            generatePaginationButtons(1, 5)
          ) : currentPage <= lastPage - 5 ? (
            // Display pages centered around currentPage when it's far from lastPage
            generatePaginationButtons(currentPage - 2, currentPage + 2)
          ) : (
            // Display last 5 pages when close to the end
            generatePaginationButtons(lastPage - 4, lastPage)
          )
        ) : (
          <button className="btn btn-disabled join-item btn-sm hidden md:block">
            ...
          </button>
        )}

        {/* Next Page Button */}
        <button
          disabled={currentPage >= lastPage}
          className="btn join-item btn-sm"
          onClick={() => handlePage(currentPage + 1)}
        >
          <MdOutlineKeyboardDoubleArrowRight />
        </button>

        {/* Last Page Button */}
        <button
          disabled={currentPage === lastPage}
          className="btn join-item btn-sm hidden md:block"
          onClick={() => handlePage(lastPage)}
        >
          Last Page
        </button>
      </div>
    </div>
  );
}

export default Paginator;
