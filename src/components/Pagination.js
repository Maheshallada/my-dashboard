import React from 'react';

function Pagination({ totalItems, page, setPage, pageSize, setPageSize }) {
  const totalPages = Math.ceil(totalItems / pageSize);

  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>Prev</button>
      <span>Page {page} of {totalPages}</span>
      <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>Next</button>
      <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
        {[10, 50, 100].map(size => (
          <option key={size} value={size}>{size} per page</option>
        ))}
      </select>
    </div>
  );
}

export default Pagination;
