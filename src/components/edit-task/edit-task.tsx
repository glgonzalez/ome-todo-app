import React, { FC, Fragment, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { 
  Button, 
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Close } from '@material-ui/icons';
import { Task } from 'contexts/tasks-context';
import { TaskForm } from 'components/task-form';
import { ActionTypes } from 'reducers/task-reducer';

const useStyles = makeStyles((theme: Theme) => createStyles({
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
}));

interface EditTaskProps {
  task: Task;
};

export const EditTask: FC<EditTaskProps> = ({ task }) => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const classes = useStyles();
  return (
    <Fragment>
      <Button onClick={() => setShowForm(true)}>Edit</Button>
      <Dialog open={showForm} onClose={() => setShowForm(false)} fullWidth>
        <DialogTitle disableTypography>
          <Typography variant="h6">
            Add Task
          </Typography>
          <IconButton onClick={() => setShowForm(false)} className={classes.closeButton}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <TaskForm task={task} action={ActionTypes.UPDATE} close={() => setShowForm(false)}/>
        </DialogContent>
      </Dialog>
    </Fragment>
  );
}