import React from 'react';
import './SortBlock.css';

function SortBlock({ label, sortKey, sortConfig, setSortConfig }) {
  const isActive = sortConfig.key === sortKey;

  const handleSort = (direction) => {
    if (isActive && sortConfig.direction === direction) {
      setSortConfig({ key: null, direction: null }); // Reset
    } else {
      setSortConfig({ key: sortKey, direction });
    }
  };

  return (
    <div className={`sort-block ${isActive ? 'active-block' : ''}`}>
      <div className="sort-label">{label}</div>
      <div className="angled-arrows">
        <span
          className={`arrow up ${isActive && sortConfig.direction === 'asc' ? 'active' : ''}`}
          onClick={() => handleSort('asc')}
        >
          &gt;
        </span>
        <span
          className={`arrow down ${isActive && sortConfig.direction === 'desc' ? 'active' : ''}`}
          onClick={() => handleSort('desc')}
        >
          &lt;
        </span>
      </div>
    </div>
  );
}

export default SortBlock;
