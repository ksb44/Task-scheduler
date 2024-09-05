'use client';

import RecurrenceSelector from './RecurrenceSelector';
import DateRangeSelector from './DateRangeSelector';
import CalendarPreview from './CalendarPreview';

const EventScheduler = () => {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200 rounded-lg shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-800">Event Scheduler</h2>
      <RecurrenceSelector />
      <DateRangeSelector />
      <CalendarPreview />
    </div>
  );
};

export default EventScheduler;
