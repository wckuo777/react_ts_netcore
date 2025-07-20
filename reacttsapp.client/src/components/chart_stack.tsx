import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';

interface TestData {
   name: string;
    uv: number;
    pv: number;
    amt: number;
}
const data: TestData[] = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function AppStackChart() {
  const [hiddenKeys, setHiddenKeys] = useState<string[]>([]);
  const legendPayload = [
    { value: 'PV', dataKey: 'pv', color: '#8884d8' },
    { value: 'UV', dataKey: 'uv', color: '#82ca9d' },
    { value: 'Amount', dataKey: 'amt', color: '#bed46dff' },

  ];
  const barOrder = ['pv', 'uv', 'amt'];
  type LegendType = { value: string; dataKey: string; color: string };
  const handleLegendClick = (item: LegendType ) => {
    const key = item.dataKey as string;
    setHiddenKeys((prev) =>
      prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]
    );
  };
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend
          onClick={handleLegendClick}
          itemSorter={(item) => barOrder.indexOf(item.dataKey as string)}
         
        />
        {legendPayload.map(item => (
          <Bar
            key={item.dataKey}
            dataKey={item.dataKey}
            stackId="a"
            fill={item.color}
            hide={hiddenKeys.includes(item.dataKey)}
            name={item.dataKey + '-Clickable'}
          
          >
            <LabelList dataKey={item.dataKey}   position="middle" fill="#c96687ff"   />
          </Bar>
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
}
