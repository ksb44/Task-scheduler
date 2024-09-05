import { CalendarProvider } from './components/CalendarContext';
import EventScheduler from './components/EventScheduler';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
      <CalendarProvider>
        <EventScheduler />
      </CalendarProvider>
    </main>
  );
}
