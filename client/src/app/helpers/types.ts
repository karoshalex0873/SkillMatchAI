// interfaces.ts
export interface Job {
  title: string;
  company: string;
  location: string;
  matchPercentage: number;
}

export interface Application {
  position: string;
  company: string;
  status: 'Applied' | 'In Review' | 'Offered' | 'Rejected';
}