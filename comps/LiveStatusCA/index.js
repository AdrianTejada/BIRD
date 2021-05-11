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
    Recovery: 7498,
    Case: 6688,
    // TotalCase: 132925,
    Death: 53,
  },
  {
    name: '5/6',
    Recovery: 8353,
    Case: 7390,
    // TotalCase: 133619,
    Death: 57,
  },
  {
    name: '5/7',
    Recovery: 8299,
    Case:8001,
    // TotalCase: 134341,
    Death: 37,
  },
  {
    name: '5/8',
    Recovery: 7916,
    Case: 7826,
    // TotalCase: 134937,
    Death: 42,
  },
  {
    name: '5/9',
    Recovery: 6929,
    Case: 7398,
    // TotalCase: 135542,
    Death: 51,
  },
  {
    name: '5/10',
    Recovery: 6900,
    Case:7297,
    // TotalCase: 136100,
    Death: 62,
  },
];

export default class LiveStatusCA extends PureComponent {
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