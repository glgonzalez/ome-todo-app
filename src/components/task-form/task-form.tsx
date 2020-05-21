import React, { FC, FormEvent, useState } from 'react';
import { Button, FormControl, TextField, Theme, createStyles, makeStyles } from '@material-ui/core';
import { KeyboardDatePicker } from '@material-ui/pickers';
import { useTasksContext, Task } from 'contexts/tasks-context';
import { ActionTypes } from 'reducers/task-reducer';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    field: {
      marginBottom: theme.spacing(3)
    },
    button: {
      marginBottom: theme.spacing(2)
    }
  })
);

interface TaskFormProps {
  task?: Task;
  action: ActionTypes.ADD | ActionTypes.UPDATE;
  close: () => void;
}

export const TaskForm: FC<TaskFormProps> = ({
  task,
  action,
  close
}) => {
  const classes = useStyles();
  const [name, setName] = useState<string>(task && task.name || '');
  const [description, setDescription] = useState<string>(task && task.description || '');
  const [targetDate, setTargetDate] = useState<Date | null>( task && task.targetDate || null);
  const { dispatch } = useTasksContext();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(action);
    dispatch({type: action, payload: {
      id: action === ActionTypes.UPDATE && task ? task.id : Math.random().toString(36).replace('0.', ''),
      name,
      description,
      targetDate,
      completed: false
    }});
    close();
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <TextField
          className={classes.field}
          label="Name"
          type="text"
          value={name}
          required
          margin="dense"
          onChange={(event: any) => {
            setName(event.target.value);
          }}/>
          <TextField
            className={classes.field}
            label="Description"
            multiline
            value={description}
            required
            margin="dense"
            onChange={(event: any) => {
              setDescription(event.target.value)
            }}
          />
          <KeyboardDatePicker 
            autoOk
            className={classes.field}
            label="Due Date"
            value={targetDate}
            format="MM/dd/yyyy"
            onChange={setTargetDate}
          />
          <Button
            className={classes.button}
            size="large"
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
    </form>
  );
}