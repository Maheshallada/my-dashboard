import React from 'react';

function CommentTable({ comments, search, sortConfig, setSortConfig, page, pageSize }) {
  const filtered = comments.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.email.toLowerCase().includes(search.toLowerCase()) ||
    c.body.toLowerCase().includes(search.toLowerCase())
  );

  const sorted = [...filtered].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const dir = sortConfig.direction === 'asc' ? 1 : -1;
    const valA = a[sortConfig.key].toString().toLowerCase();
    const valB = b[sortConfig.key].toString().toLowerCase();
    return valA.localeCompare(valB) * dir;
  });

  const paginated = sorted.slice((page - 1) * pageSize, page * pageSize);

  const cycleSort = key => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') direction = 'desc';
    else if (sortConfig.key === key && sortConfig.direction === 'desc') direction = null;
    setSortConfig({ key: direction ? key : null, direction });
  };

  const getSortSymbol = key => {
    if (sortConfig.key !== key) return '';
    return sortConfig.direction === 'asc' ? ' 🔼' : sortConfig.direction === 'desc' ? ' 🔽' : '';
  };

  return (
    <table>
      <thead>
        <tr>
          <th >Post ID</th>
          <th >Name</th>
          <th >Email</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {paginated.map(c => (
          <tr key={c.id}>
            <td>{c.postId}</td>
            <td>{c.name}</td>
            <td>{c.email}</td>
            <td>{c.body}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CommentTable;
