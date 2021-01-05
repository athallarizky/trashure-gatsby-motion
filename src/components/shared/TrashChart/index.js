import React from 'react'
import { Card } from "@material-ui/core";
import {
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
} from 'recharts';
import useStyles from './style'

const staticDatas = [
    { name: "Jan", kg: 44 },
    { name: "Feb", kg: 79 },
    { name: "Mar", kg: 45 },
    { name: "Apr", kg: 28 },
    { name: "Mei", kg: 55 },
    { name: "Jun", kg: 93 },
  ];

const TrashCart = () => {
    const classes = useStyles()

    return (
    <Card className={classes.chartWrapper} elevation={0}>
      <div className={classes.chartTitle}>Jumlah Penjualan</div>
      <div style={{ width: "100%", height: 200 }}>
        <ResponsiveContainer>
          <BarChart
            data={staticDatas}
            margin={{ top: 15, right: 40, left: -12, bottom: 4 }}
            maxBarSize={8}
          >
            <XAxis dataKey="name" tick={{ fontSize: 12 }} interval={0} />
            <YAxis />
            <Tooltip cursor={{ fill: "rgb(239 239 239)" }} />
            {/* <CartesianGrid strokeDasharray="2 2" /> */}
            <Bar dataKey="kg" fill="#FF5722" radius={50} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
    )
}

export default TrashCart
