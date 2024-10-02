interface PaginationNumbersProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  currentPage: number;
}

// Adjust the PaginationNumbers component to use `onPageChange` and `currentPage`
const PaginationNumbers: React.FC<PaginationNumbersProps> = ({ totalItems, itemsPerPage, onPageChange, currentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = renderPageNumbers();

  return (
    <div className="flex grid-rows-1 grid-cols-3 justify-between space-x-2 mt-6 mb-10">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <div className="flex gap-2">
      {pageNumbers.map((num) => (
        <button
          key={num}
          onClick={() => handlePageChange(num)}
          className={`px-3 py-1 rounded-md ${
            num === currentPage ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-700'
          }`}
        >
          {num}
        </button>
      ))}
      </div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-md"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};


export default PaginationNumbers;
