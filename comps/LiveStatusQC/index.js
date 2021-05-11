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
    Recovery:907,
    Case: 915,
    // TotalCase: 132925,
    Death: 5,
  },
  {
    name: '5/6',
    Recovery:890,
    Case: 907,
    // TotalCase: 132925,
    Death: 5,
  },
  {
    name: '5/7',
    Recovery: 1084,
    Case: 919,
    // TotalCase: 133619,
    Death: 5,
  },
  {
    name: '5/8',
    Recovery: 1033,
    Case: 958,
    // TotalCase: 134937,
    Death: 7,
  },
  {
    name: '5/9',
    Recovery: 1090,
    Case: 960,
    // TotalCase: 135542,
    Death: 6,
  },
  {
    name: '5/10',
    Recovery: 3110,
    Case: 662,
    // TotalCase: 136100,
    Death: 6,
  },
];

export default class LiveStatusQC extends PureComponent {
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