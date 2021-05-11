import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '5/5',
    Recovery:1735,
    Case: 2271,
    // TotalCase: 132925,
    Death: 0,
  },
  {
    name: '5/6',
    Recovery: 1870,
    Case: 2211,
    // TotalCase: 133619,
    Death: 0,
  },
  {
    name: '5/7',
    Recovery: 1613,
    Case: 1980,
    // TotalCase: 133619,
    Death: 4,
  },
  {
    name: '5/8',
    Recovery: 1745,
    Case: 2042,
    // TotalCase: 134937,
    Death: 2,
  },
  {
    name: '5/9',
    Recovery: 1589,
    Case: 1633,
    // TotalCase: 135542,
    Death: 2,
  },
  {
    name: '5/10',
    Recovery: 2340,
    Case: 1597,
    // TotalCase: 136100,
    Death: 7,
  },
];

export default class LiveStatusAB extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';

  render() {
    return (
      
        <ComposedChart
        
          width={380}
          height={275}
          data={data}
          margin={{
            top: 15,
            right: 15,
            bottom: 15,
            left: 15,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          {/* <Area type="monotone" dataKey="TotalCase" fill="#8884d8" stroke="#8884d8" /> */}
          <Bar dataKey="Case" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="Recovery" stroke="#ff7300" />
          <Scatter dataKey="Death" fill="red" />
        </ComposedChart>
      
    );
  }
}