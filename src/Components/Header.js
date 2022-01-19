import Button from "./Button";

const Header = ({ onClick, showAddTask }) => {


    

    return ( 
        <header className="header">
            <h1>Task Tracker</h1>
            <Button text={ (showAddTask) ? "Hide" : "Add"} color={ (showAddTask) ? "red" : "green"} onClick={onClick}/>
        </header>
     );
}
 
export default Header;