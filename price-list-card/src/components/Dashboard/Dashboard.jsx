import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const marksArray = [
    { id: 1, name: 'Alice', physics: 75, chemistry: 80, math: 85 },
    { id: 2, name: 'Bob', physics: 60, chemistry: 70, math: 80 },
    { id: 3, name: 'Charlie', physics: 90, chemistry: 85, math: 95 },
    { id: 4, name: 'David', physics: 70, chemistry: 75, math: 65 },
    { id: 5, name: 'Emily', physics: 80, chemistry: 85, math: 80 },
    { id: 6, name: 'Frank', physics: 65, chemistry: 70, math: 75 },
    { id: 7, name: 'Grace', physics: 85, chemistry: 90, math: 95 },
    { id: 8, name: 'Hannah', physics: 75, chemistry: 80, math: 85 },
    { id: 9, name: 'Isaac', physics: 90, chemistry: 95, math: 90 },
    { id: 10, name: 'Jessica', physics: 80, chemistry: 85, math: 80 },
    { id: 11, name: 'Kevin', physics: 75, chemistry: 70, math: 65 },
    { id: 12, name: 'Lena', physics: 85, chemistry: 80, math: 75 },
  ];
  
  return (
    <div>
        <LineChart
          width={1000}
          height={300}
          data={marksArray}
        >
          <Line dataKey="physics"></Line>
          <Line dataKey="math" stroke="#8884d8"></Line>
          <XAxis dataKey="name" />
          <YAxis></YAxis>
          <Tooltip></Tooltip>
        </LineChart>
    </div>
  );
};

export default Dashboard;