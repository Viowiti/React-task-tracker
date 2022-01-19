import { useState } from "react";

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState();

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text){
            alert('Kindly add task');
            return
        }
        onAdd({ text, day, reminder })
        setDay('')
        setReminder(false)
        setText('')
    }

    return ( 
        <form action=" " className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder="Add Task" onChange={(e)=> setText(e.target.value)} name="" id="" value={text}/>
            </div>

            <div className="form-control">
                <label htmlFor="">Day and Time</label>
                <input type="text" placeholder="Add Date and Time" name="" id="" value={day} onChange={(e)=> setDay(e.target.value) }/>
            </div>

            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" checked={reminder} name="" id="" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value='Save Task' className="btn btn-block"/>
        </form>
     );
}
 
export default AddTask;
<form action=" " className="add-form"></form>