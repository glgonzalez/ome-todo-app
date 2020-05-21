import { Task } from 'contexts/tasks-context';

export enum ActionTypes {
  ADD = 'ADD',
  DELETE = 'DELETE',
  UPDATE = 'UPDATE',
  COMPLETE = 'COMPLETE'
}

export const taskReducer = (state: Task[], action: any) => {
  switch (action.type) {
    case ActionTypes.ADD:
      const newTasks = [
        action.payload,
        ...state
      ];
      return newTasks;
    case ActionTypes.DELETE:
      return state.filter((task) => {
        return task.id !== action.id;
      });
    case ActionTypes.UPDATE:
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            ...action.payload
          };
        }
        return task;
      });
    case ActionTypes.COMPLETE: 
      const updatedTasks = state.map((task) => {
        if (task.id === action.id && !task.completed) {
          task.completed = true;
          task.completionDate = new Date();
        } 
        return task;
      });
      return updatedTasks;
    default:
      return state;
  }
}