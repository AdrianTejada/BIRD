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
    Recovery:4361,
    Case: 2941,
    // TotalCase: 132925,
    Death: 44,
  },
  {
    name: '5/6',
    Recovery:3997,
    Case: 3424,
    // TotalCase: 132925,
    Death: 26,
  },
  {
    name: '5/7',
    Recovery: 3875,
    Case: 3166,
    // TotalCase: 133619,
    Death: 23,
  },
  {
    name: '5/8',
    Recovery: 3596,
    Case: 2864,
    // TotalCase: 134937,
    Death: 25,
  },
  {
    name: '5/9',
    Recovery: 3656,
    Case: 3216,
    // TotalCase: 135542,
    Death: 47,
  },
  {
    name: '5/10',
    Recovery: 3110,
    Case: 2716,
    // TotalCase: 136100,
    Death: 19,
  },
];

export default class LiveStatusON extends PureComponent {
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