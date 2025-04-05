export interface Application {
  position: string;
  company: string;
  status: 'Applied' | 'In Review' | 'Offered' | 'Rejected';
}

// interfaces/job.interface.ts
export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  matchPercentage: number;
  skills: string[];
  experienceLevel: string;
  postedDate: Date;
  salaryRange?: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
}