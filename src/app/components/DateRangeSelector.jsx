'use client';

import { useCalendar } from './CalendarContext';

const DateRangeSelector = () => {
  const { recurrence, setRecurrence } = useCalendar();

  const handleStartDateChange = (e) => {
    setRecurrence({ ...recurrence, startDate: new Date(e.target.value) });
  };

  const handleEndDateChange = (e) => {
    setRecurrence({ ...recurrence, endDate: e.target.value ? new Date(e.target.value) : null });
  };

  return (
    <div className="mt-6 bg-white p-6 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <label htmlFor="start-date" className="block text-sm font-semibold text-gray-800">Start Date</label>
      <input
        type="date"
        id="start-date"
        value={recurrence.startDate.toISOString().split('T')[0]}
        onChange={handleStartDateChange}
        className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
      />
      
      <label htmlFor="end-date" className="block text-sm font-semibold text-gray-800 mt-4">End Date (optional)</label>
      <input
        type="date"
        id="end-date"
        value={recurrence.endDate ? recurrence.endDate.toISOString().split('T')[0] : ''}
        onChange={handleEndDateChange}
        className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default DateRangeSelector;
