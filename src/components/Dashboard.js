import React, { useEffect, useState } from 'react';
import CommentTable from '../components/CommentTable';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import SortBlock from '../components/SortBlock';
import { saveState, loadState } from '../utils/localStorageUtils';
import './Dashboard.css';

const COMMENTS_API = 'https://jsonplaceholder.typicode.com/comments';

function Dashboard() {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState(loadState('search') || '');
  const [sortConfig, setSortConfig] = useState(loadState('sort') || { key: null, direction: null });
  const [page, setPage] = useState(loadState('page') || 1);
  const [pageSize, setPageSize] = useState(loadState('pageSize') || 10);

  // Fetch comments on mount
  useEffect(() => {
    fetch(COMMENTS_API)
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);

  useEffect(() => {
    saveState('search', search);
    saveState('sort', sortConfig);
    saveState('page', page);
    saveState('pageSize', pageSize);
  }, [search, sortConfig, page, pageSize]);

  return (
    <div className="dashboard-container">
      

      <div className="dashboard-header">
        <div className="sort-controls">
          <SortBlock
            label="Sort by Post ID"
            sortKey="postId"
            sortConfig={sortConfig}
            setSortConfig={setSortConfig}
          />
          <SortBlock
            label="Sort by Name"
            sortKey="name"
            sortConfig={sortConfig}
            setSortConfig={setSortConfig}
          />
          <SortBlock
            label="Sort by Email"
            sortKey="email"
            sortConfig={sortConfig}
            setSortConfig={setSortConfig}
          />
        </div>

        <SearchBar search={search} setSearch={setSearch} />
      </div>

      <CommentTable
        comments={comments}
        search={search}
        sortConfig={sortConfig}
        page={page}
        pageSize={pageSize}
      />

      <Pagination
        totalItems={comments.length}
        page={page}
        setPage={setPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
      />
    </div>
  );
}

export default Dashboard;
