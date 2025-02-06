
import { useEffect, useState } from "react";
import {
  ComposedChart,
  Bar,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await fetch("/products.json").then((res) =>
        res.json()
      );
      setProducts(data);
    };

    fetchProducts();
  }, []);

  // console.log("the data is", products);

  return (
    <div className="statistics-component bg-gray-50 ">
      {/* Header Section */}
      <div className="text-center mb-6 bg-purple-500">
        <h2 className="text-4xl font-bold text-white mb-4 pt-3">Statistics</h2>
        <p className="text-white pb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to <br /> the coolest accessories, we have it all!
        </p>
      </div>

      {/* Chart Section */}
      <div className="chart-container bg-white p-4 rounded-2xl shadow-md max-w-[1540px] mx-auto">
        <h3 className="text-lg font-semibold mb-4">Statistics</h3>
        <ResponsiveContainer width="100%" height={400}>
          <ComposedChart
            data={products}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="product_title" />
            <YAxis yAxisId="left" label={{ value: "Price / Quantity", angle: -90, position: "insideLeft" }} />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{ value: "Rating", angle: -90, position: "insideRight" }}
            />
            <Tooltip />
            <Legend />
            <Bar yAxisId="left" dataKey="price" fill="#7c3aed" name="Price" />
            <Bar yAxisId="left" dataKey="quantity" fill="#9f7aea" name="Quantity" />
            <Scatter
              yAxisId="right"
              dataKey="rating"
              fill="#f56565"
              name="Rating"
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Statistics;
