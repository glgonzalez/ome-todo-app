import React, { createContext, useContext, useMemo, useReducer, Dispatch, FC } from 'react';
import { taskReducer } from 'reducers/task-reducer';
import { mockTasks } from 'components/task-list/mockTasks';

export interface Task {
  id: number;
  name: string;
  description: string;
  targetDate: Date;
  completionDate?: Date;
  completed: boolean;
}

interface TasksContext {
  state: Task[],
  dispatch: Dispatch<any>;
};

const Context = createContext<TasksContext>({
  state: mockTasks, 
  dispatch: () => null
});

export const TasksProvider: FC = ({children}) => {
  const [state, dispatch] = useReducer(taskReducer, mockTasks);
  const tasksContext = useMemo(() => {
    return {
      state,
      dispatch
    };
  }, [state, dispatch]);

  return <Context.Provider value={tasksContext} children={children} />;
};

export const useTasksContext = () => {
  return useContext(Context);
};
