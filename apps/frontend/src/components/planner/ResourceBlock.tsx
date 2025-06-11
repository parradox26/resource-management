import AllocationBar from './AllocationBar';

interface Resource{
    id: string;
    name: string;
    allocations: {
        id: string;
        projectName: string;
        start: number;
        end: number;
    }[];
}



interface ResourceBlockProps {  
    resource: Resource;
    days: string[][];
}

export default function ResourceBlock({ resource, days }: ResourceBlockProps) {
  return (
    <div className="border-b">
      {/* Resource Header Row */}
      <div className={`grid grid-cols-[200px_repeat(${days.length},1fr)] items-center bg-gray-50`}>
        <div className="px-4 py-2 font-medium border-r">{resource.name}</div>
        {days.map((day: string[], i: number) => (
          <div key={i} className="h-10 border-r" />
        ))}
      </div>

      {/* Project Allocations */}
      {resource.allocations.map((alloc) => (
        <div key={alloc.id} className={`grid grid-cols-[200px_repeat(${days.length},1fr)] relative`}>
          <div className="px-4 py-1 text-sm text-gray-600 border-r">{alloc.projectName}</div>
          {/* <AllocationBar start={alloc.start} end={alloc.end} /> */}
        {days.map((_, dayIdx) => {
            const isInRange = dayIdx+1 >= alloc.start && dayIdx+1 <= alloc.end;
            return (
                <div
                    key={dayIdx}
                    className={`h-8 border-r ${isInRange ? 'bg-green-300' : ''} text-center`}
                >
                {isInRange ? '8h': ''}
                </div>
            );
        })}
        </div>
      ))}

      {/* + Assign New Project */}
      <div className={`grid grid-cols-[200px_repeat(${days.length},1fr)] text-sm`}>
        <div className="pl-4 py-2 text-blue-600 hover:underline cursor-pointer">
          + Assign to Project
        </div>
        <div className="col-span-5 border-t" />
      </div>
    </div>
  );
}
