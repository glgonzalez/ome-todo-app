import React, { FC } from 'react';
import { 
  Button,
  ExpansionPanel,
  ExpansionPanelActions,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Theme,
  Typography
} from '@material-ui/core';
import { 
  createStyles,
  makeStyles
} from '@material-ui/core/styles';
import { ExpandMore } from '@material-ui/icons';
import { Task, useTasksContext } from 'contexts/tasks-context';
import { ActionTypes } from 'reducers/task-reducer';
import { formateDate } from 'helpers/format-date';
import { EditTask } from 'components/edit-task'; 

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    marginBottom: theme.spacing(1)
  },
  heading: {
    textTransform: 'capitalize'
  },
  dates: {
    flexGrow: 1,
    paddingRight: theme.spacing(2),
    textAlign: 'end'
  },
  delete: {
    color: theme.palette.error.dark
  },
  complete: {
    color: theme.palette.success.dark
  }
}));

export const TaskComponent: FC<Task> = ({ id, name, description, targetDate, completionDate, completed }) => {
  const classes = useStyles();
  const { dispatch } = useTasksContext();

  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary expandIcon={<ExpandMore />} className={classes.heading}>
        <Typography>{name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
      <Typography gutterBottom>{description}</Typography>
      </ExpansionPanelDetails>
      <ExpansionPanelActions>
        <EditTask task={{
          id,
          name,
          description,
          targetDate,
          completionDate,
          completed
        }}/>
        <Button 
          className={classes.complete}
          disabled={completed} 
          onClick={
            () => dispatch({ type: ActionTypes.COMPLETE, id: id})
          }>
            Complete
        </Button>
        <Button className={classes.delete} onClick={() => dispatch({type: ActionTypes.DELETE, id})}>Remove</Button>
        <Typography variant="overline" className={classes.dates}>
          { !completed && <div>Due: {formateDate(targetDate)}</div>}
          {completed && completionDate && <div className={classes.complete}>Completed: {formateDate(completionDate)}</div>}
        </Typography>
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
};