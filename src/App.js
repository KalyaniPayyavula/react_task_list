import React,{useState} from 'react'
import Todo from './components/todo'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';
import './App.css'

const completedReactModules =[
  {name : "React Basics", hours: 2},
  {name : "React Hooks", hours: 3},
  {name : "Redux", hours: 5},
  {name : "Router", hours: 6}
]

 const CustomButton = styled(Button)(({ theme }) => ({
  marginLeft: '36%',
  marginTop: '1%',
  marginBottom: '1%'
}));

function App() {

  const [list, setList] = useState(completedReactModules)
  const [open, setOpen] = React.useState(false);
  let taskNameVal = ""
  let taskHoursVal = ""

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const deleteAll = () =>{
    setList("")
  }

  const deleteTask = (e) =>{
   setList(list.filter((ele)=> ele.name !== e.target.name))
  }

  const handleChange = (e) =>{ 
    if(e.target.id === "taskName"){
       taskNameVal = e.target.value
    }
    if(e.target.id === "taskHours"){
      taskHoursVal = e.target.value
    }
  }

  const handleAdd = () =>{
    setOpen(false);
    let newTaskItem = {
      name :taskNameVal,
      hours : taskHoursVal
    }
  list.push(newTaskItem)
  setList([...list])
  }


  return (
    <div> 
       <CustomButton variant="outlined" id="addTaskToListId" className='addTaskToList' onClick={handleClickOpen}>
        Add Task To List
      </CustomButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>      
          <TextField
            autoFocus
            margin="dense"
            id="taskName"
            label="Enter Task Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="taskHours"
            label="Enter Number Of Hours Required For Task"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button id="addTaskId" onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    {
      list.map((ele, i) =>{
        return <Todo key={`${i} ${ele.name} ${ele.hours}`} name={ele.name} hours={ele.hours} onClick={deleteTask} ></Todo>      
      })
    }
    <CustomButton className='addTask' variant='contained' id="deleteAllTasks" onClick={deleteAll}>Delete All</CustomButton>
    </div>
  );

}
export default App;
