import { useState, useEffect } from "react";
import { FixedSizeGrid as Grid } from "react-window";
import Cell from "../components/Cell";
import { getHomeCardListData } from "../services/homeCards";

const ROW_HEIGHT = 100;
const GAP = 15;

const Home = () => {
  const [programList, setProgramList] = useState([]);
  const [columnCount, setColumnCount] = useState(3);
  const [gridWidth, setGridWidth] = useState(window.innerWidth-40);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const programJson = await getHomeCardListData();
        setProgramList(programJson);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth -40;
      setGridWidth(width);

      if (width > 1200) setColumnCount(4);
      else if (width > 900) setColumnCount(3);
      else if (width > 600) setColumnCount(2);
      else setColumnCount(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const columnWidth = Math.floor(gridWidth / columnCount) - GAP;
  const rowCount = Math.ceil(programList.length / columnCount);

  return (
    <div className="h-full w-full bg-gray-50 items-center absolute top-12">
      <Grid
        columnCount={columnCount}
        columnWidth={columnWidth}
        height={500}
        rowCount={rowCount}
        rowHeight={ROW_HEIGHT}
        width={gridWidth}
        className="mx-auto"
        itemData={{ programList, columnCount }} 
      >
        {Cell}
      </Grid>
    </div>
  );
};

export default Home;
