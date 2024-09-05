'use client';

import { useCalendar } from './CalendarContext';

const CalendarPreview = () => {
  const { recurrence } = useCalendar();

  const generateDates = () => {
    let dates = [];
    let currentDate = new Date(recurrence.startDate);
    const endDate = recurrence.endDate || new Date(currentDate.setFullYear(currentDate.getFullYear() + 1));

    while (currentDate <= endDate) {
      if (recurrence.pattern === 'daily') {
        dates.push(new Date(currentDate));
        currentDate.setDate(currentDate.getDate() + recurrence.every);
      } else if (recurrence.pattern === 'weekly') {
        recurrence.specificDays.forEach((day) => {
          const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(day);
          const nextDay = new Date(currentDate);
          nextDay.setDate(currentDate.getDate() + ((dayOfWeek + 7 - currentDate.getDay()) % 7));
          if (nextDay <= endDate) dates.push(new Date(nextDay));
        });
        currentDate.setDate(currentDate.getDate() + recurrence.every * 7);
      } else if (recurrence.pattern === 'monthly') {
        currentDate.setMonth(currentDate.getMonth() + recurrence.every);
        dates.push(new Date(currentDate));
      } else if (recurrence.pattern === 'yearly') {
        currentDate.setFullYear(currentDate.getFullYear() + recurrence.every);
        dates.push(new Date(currentDate));
      }
    }
    return dates;
  };

  const recurringDates = generateDates();

  return (
    <div className="mt-6 bg-white p-6 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <h3 className="text-xl font-semibold text-gray-900">Upcoming Dates</h3>
      <ul className="mt-4 space-y-2">
        {recurringDates.map((date, index) => (
          <li key={index} className="text-gray-700 bg-gray-100 p-3 rounded-lg shadow-sm transition-transform transform hover:scale-105">
            {date.toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CalendarPreview;
