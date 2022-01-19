import {FaTimes} from 'react-icons/fa'

const Task = ({tasks, onDelete, onToggle}) => {
    return ( 
        <div >
            {tasks.map(task =>{
                return <div className={`task ${task.reminder ? `reminder` : ``}`} key={task.id} onDoubleClick={() =>onToggle(task.id)}>
                    <h3>{task.text} <FaTimes onClick={()=>onDelete(task.id)} style={{color:"red", cursor:"pointer"}}/></h3>
                    <p>{task.day}</p>
                </div>
            })}
        </div>
     );
}
 
export default Task