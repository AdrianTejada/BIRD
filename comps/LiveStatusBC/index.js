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
    Recovery: 773,
    Case: 694,
    // TotalCase: 132925,
    Death: 0,
  },
  {
    name: '5/6',
    Recovery: 868,
    Case: 967,
    // TotalCase: 133619,
    Death: 1,
  },
  {
    name: '5/7',
    Recovery: 774,
    Case: 722,
    // TotalCase: 134341,
    Death: 7,
  },
  {
    name: '5/8',
    Recovery: 0,
    Case: 596,
    // TotalCase: 134937,
    Death: 12,
  },
  {
    name: '5/9',
    Recovery: 0,
    Case: 605,
    // TotalCase: 135542,
    Death: 4,
  },
  {
    name: '5/10',
    Recovery: 2340,
    Case: 558,
    // TotalCase: 136100,
    Death: 4,
  },
];

export default class LiveStatusBC extends PureComponent {
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