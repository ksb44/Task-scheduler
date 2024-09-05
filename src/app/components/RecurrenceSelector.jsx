'use client';

import { useCalendar } from './CalendarContext';

const RecurrenceSelector = () => {
  const { recurrence, setRecurrence, toggleDay } = useCalendar();

  const handlePatternChange = (e) => {
    setRecurrence({ ...recurrence, pattern: e.target.value });
  };

  const handleEveryChange = (e) => {
    setRecurrence({ ...recurrence, every: parseInt(e.target.value, 10) });
  };

  return (
    <div className="mb-6 bg-white p-6 border border-gray-200 rounded-lg shadow-md transition-transform transform hover:scale-105">
      <label htmlFor="pattern" className="block text-sm font-semibold text-gray-800">Recurrence Pattern</label>
      <select
        id="pattern"
        value={recurrence.pattern}
        onChange={handlePatternChange}
        className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      <div className="mt-4">
        <label htmlFor="every" className="block text-sm font-semibold text-gray-800">Every</label>
        <input
          type="number"
          id="every"
          value={recurrence.every}
          onChange={handleEveryChange}
          className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
          min="1"
        />
      </div>

      {recurrence.pattern === 'weekly' && (
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-gray-800">Select Days</h4>
          <div className="mt-2 flex gap-2 flex-wrap">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => toggleDay(day)}
                className={`px-4 py-2 border rounded-md shadow-sm transition-colors duration-300 ${recurrence.specificDays.includes(day) ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>
      )}

      {recurrence.pattern === 'monthly' && (
        <div className="mt-6">
          <label htmlFor="nth-day" className="block text-sm font-semibold text-gray-800">Nth Day of Month</label>
          <input
            type="number"
            id="nth-day"
            value={recurrence.nthDay || ''}
            onChange={(e) => setRecurrence({ ...recurrence, nthDay: parseInt(e.target.value, 10) })}
            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
            min="1"
          />
        </div>
      )}
    </div>
  );
};

export default RecurrenceSelector;
