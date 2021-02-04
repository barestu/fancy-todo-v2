export interface TodoSchema {
  id: number;
  name: string;
  completed: boolean;
  created_date: Date;
  completed_date: Date | null;
  due_date: Date;
}
