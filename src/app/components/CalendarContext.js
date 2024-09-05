'use client';

import { createContext, useContext, useState } from 'react';

// Create a Calendar Context
const CalendarContext = createContext();

export const CalendarProvider = ({ children }) => {
  const [recurrence, setRecurrence] = useState({
    pattern: 'daily',
    every: 1,
    specificDays: [],
    nthDay: null,
    startDate: new Date(),
    endDate: null,
  });

  // Toggle specific days (e.g., Monday, Wednesday for weekly recurrence)
  const toggleDay = (day) => {
    setRecurrence((prev) => ({
      ...prev,
      specificDays: prev.specificDays.includes(day)
        ? prev.specificDays.filter((d) => d !== day)
        : [...prev.specificDays, day],
    }));
  };

  return (
    <CalendarContext.Provider value={{ recurrence, setRecurrence, toggleDay }}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendar = () => useContext(CalendarContext);
