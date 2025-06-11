export default function TimelineHeader({ days }: { days: string[][] }) {
  return (
    <div className={`grid grid-cols-[200px_repeat(${days.length},1fr)] bg-gray-100 border-b text-sm font-semibold`}>
      <div className="px-4 py-2 border-r">Resource</div>
      {days.map((day) => (
        <div key={day[0]} className="px-4 py-2 text-center border-r">
          <span className="text-lg font-bold">{day[0]}</span>
          <br />
          <span className="text-xs text-gray-500">{day[1]}</span>
        </div>
      ))}
    </div>
  );
}
