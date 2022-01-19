import Task from "../Task";




const Tasks = ({tasks, onDelete,onToggle}) => {
    
    return ( 
        <div>
            <Task tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
        </div>
     );
}
 
export default Tasks;