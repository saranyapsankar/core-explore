// src/components/Cell.js
import { Link } from "react-router-dom";

const Cell = ({ columnIndex, rowIndex, style, data }) => {
  const index = rowIndex * data.columnCount + columnIndex;
  const item = data.programList[index];

  if (!item) return null;

  return (
    <div style={style} className="p-2 ">
      <Link
        to={item.path}
        className="bg-white hover:text-teal-600 hover:border-2 text-teal-800 border border-teal-400 shadow-md rounded-lg p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300"
      >
        <h2 className="text-lg font-semibold text-center">{item.title}</h2>
      </Link>
    </div>
  );
};

export default Cell;
