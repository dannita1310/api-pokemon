import React from "react";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, pagina, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}></button>
      <div>
        {pagina} de {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}></button>
    </div>
  );
};

export default Pagination;
