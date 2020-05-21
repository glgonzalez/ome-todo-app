import { Task } from '../../contexts/tasks-context';

export const mockTasks: Task[] = [
  {
    id: 1,
    name: 'Task One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    targetDate: new Date(),
    completed: false
  },
  {
    id: 2,
    name: 'Task Two',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
    targetDate: new Date(),
    completionDate: new Date(),
    completed: true
  }
];