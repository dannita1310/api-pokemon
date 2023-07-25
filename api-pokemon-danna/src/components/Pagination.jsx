import React from "react";
import { LeftArrow, RightArrow } from "./Arrowsvg";

const Pagination = (props) => {
  const { onLeftClick, onRightClick, pagina, totalPages } = props;

  return (
    <div className="pagination">
      <button className="pagination-btn" onClick={onLeftClick}>
        <div className="icon">
          <LeftArrow />
        </div>
      </button>
      <div>
        {pagina} de {totalPages}
      </div>
      <button className="pagination-btn" onClick={onRightClick}>
        <div className="icon">
          <RightArrow />
        </div>
      </button>
    </div>
  );
};

export default Pagination;
