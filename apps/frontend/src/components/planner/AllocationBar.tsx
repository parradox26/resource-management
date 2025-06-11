export default function AllocationBar({ start, end }: { start: number; end: number }) {
  const width = (end - start + 1) * 100;
  const left = (start - 1) * 100;

  return (
    <div className="col-span-5 relative h-8">
      <div
        className="absolute h-6 rounded bg-blue-500 text-white text-xs flex items-center px-2"
        style={{ left: `${left}px`, width: `${width}px` }}
      >
        {`${width / 100} days`}
      </div>
    </div>
  );
}
