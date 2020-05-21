import React, { FC, Fragment } from 'react';
import { TaskComponent } from 'components/task';
import { useTasksContext } from 'contexts/tasks-context';

export const TaskList: FC = () => {
  const { state } = useTasksContext();
  return (
    <Fragment>
      {state && state.map((task) => <TaskComponent key={task.id} {...task} />)}
    </Fragment>
  );
};
