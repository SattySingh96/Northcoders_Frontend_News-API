import React from "react";

const Sorter = ({ handleSortbyChange }) => {
  const handleSubmit = event => {
    event.preventDefault();
    handleSortbyChange(event.target.value);
  };

  return (
    <div>
      <select className='Sorter' onChange={handleSubmit}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comments</option>
        <option value="votes">Votes</option>
      </select>
    </div>
  );
};

export default Sorter;
