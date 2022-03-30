import { LineChart, Line, ResponsiveContainer } from 'recharts';

const Chart = () => {
  const series = [
    {
      name: 'Series 1',
      data: [
        { category: 'A', value: Math.random() },
        { category: 'B', value: Math.random() },
        { category: 'C', value: Math.random() },
      ],
    },
    {
      name: 'Series 2',
      data: [
        { category: 'B', value: Math.random() },
        { category: 'C', value: Math.random() },
        { category: 'D', value: Math.random() },
      ],
    },
    {
      name: 'Series 3',
      data: [
        { category: 'C', value: Math.random() },
        { category: 'D', value: Math.random() },
        { category: 'E', value: Math.random() },
      ],
    },
  ];

  return (
    <ResponsiveContainer width="100%" minHeight={400} height="100%">
      <LineChart width={500} height={100}>
        {series.map((s) => (
          <Line dataKey="value" data={s.data} name={s.name} key={s.name} />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
