type Resource = {
  id: string;
  name: string;
  capacity: number;
};

type Allocation = {
  id: string;
  resourceId: string;
  projectId: string;
  projectName: string;
  startDate: string;
  endDate: string;
  
  plannedHoursPerDay: number;
  dailyAllocation: DailyAllocation[]
};


type DailyAllocation =  {
  date: Date;
  hours: number;

}


