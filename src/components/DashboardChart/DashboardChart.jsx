import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";

const data = [
  { name: "Total Contracts", value: 350 },
  { name: "Pending Contracts", value: 250 },
];

const COLORS = ["#007bff", "#ffb703"];

function DashboardChart() {
  return (
    <div className="card shadow-sm border-1 p-3">
      <h5>Contracts</h5>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default DashboardChart;
