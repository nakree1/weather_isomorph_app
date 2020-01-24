import React from 'react';
import { format } from "date-fns";


export default function CustomTooltip({ active, payload }) {
  if (!active) {
    return null
  }

  const { temp, date } = payload[0].payload;

  return (
    <div className="custom-tooltip">
      <p className="label">Date: {format(new Date(date), 'MMM d, HH:mm')}</p>
      <p className="temp">Temperature: {temp}℃</p>
    </div>
  )
}
