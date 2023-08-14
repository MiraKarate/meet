// src/components/EventGenresChart.js

import { useState, useEffect } from 'react';
import { ResponsiveContainer, PieChart, Pie, Legend, Cell } from 'recharts';

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState ([]);
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'Angular'];
    const colors = ['#1911bf', '#cc8f45', '#84abba', '#82ba5f', '#255322']


    useEffect(() => {
        setData(getData());
    }, [`${events}`]);
    

    const getData = () => {
        const data = genres.map((genre) => {
            const filteredEvents = events.filter(event => event.summary.includes(genre))
            return {
                name: genre,
                value: filteredEvents.length
            }
        })

        return data;
    }

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
        const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
        return percent ? (
          <text
            x={x}
            y={y}
            fill="#000000"
            textAnchor={x > cx ? 'start' : 'end'}
            dominantBaseline="central"
          >
            {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
          </text>
        ) : null;
      };
    

    return (
        <ResponsiveContainer width="99%" height={400}>
          <PieChart>
          <Pie
                    data={data}
                    dataKey="value"
                    outerRadius="80%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    fill="#353187"
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))
                    }
                </Pie>
                {
                    data.map((entry, index) => (
                        <Legend 
                            key={`legend-${index}`} 
                            verticalAlign="bottom" 
                            align="bottom"
                            wrapperStyle={{
                                WebkitTextStroke: `1px`,
                                background: 'rgba(255, 255, 255, 0.5',
                                textShadow: '0px, 0px, 10px rgba(255, 255, 255, 1)'
                            }}
                        />
                    ))
                }
          </PieChart>
        </ResponsiveContainer>
      );
};

    
  export default EventGenresChart;