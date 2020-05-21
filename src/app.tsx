import React, { FC, lazy } from 'react';
import { TasksProvider } from 'contexts/tasks-context';
import { TaskList } from 'components/task-list';
import { AddTask } from 'components/add-task';
import { 
  AppBar, 
  Container, 
  Toolbar, 
  Typography, 
  Theme
} from '@material-ui/core';
import { 
  createStyles,
  makeStyles
} from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    appBar: {
      backgroundColor: theme.palette.grey[700],
      marginBottom: theme.spacing(3)
    },
    container: {
      justifyContent: 'center',
      maxWidth: '664px'
    },
    title: {
      flexGrow: 1
    }
  })
);

export const App: FC = () => {
  const classes = useStyles();
  return (
    <TasksProvider>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography className={classes.title}>
              ONLINE MED ED TODO APP
            </Typography>
            <AddTask />
          </Toolbar>
        </AppBar>
        <Container className={classes.container}>
          <TaskList />
        </Container>
      </MuiPickersUtilsProvider>
    </TasksProvider>
  );
};

export default App;
