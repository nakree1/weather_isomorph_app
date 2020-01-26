import React, { useCallback } from 'react';
import { startOfDay, endOfDay, format } from 'date-fns';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

import CustomTooltip from './CustomTooltip';

const now = new Date();

export default function Chart({ data }) {
  const domain = [Number(startOfDay(now)), Number(endOfDay(now))];

  const formatTick = useCallback((tick) => {
    const date = new Date(tick);

    return format(date, 'HH:mm');
  }, []);

  return (
    <div className="weather-chart">
      <ResponsiveContainer>
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <XAxis
            type="number"
            dataKey="date"
            domain={domain}
            tickCount={24}
            interval={2}
            tickFormatter={formatTick}
          />
          <YAxis />
          <Tooltip content={<CustomTooltip />} />
          <Area
            isAnimationActive={false}
            type="monotone"
            dataKey="temp"
            stroke="#4188e4"
            fill="#4188e4"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
