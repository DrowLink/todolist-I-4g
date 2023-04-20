import React, {useState} from "react"

export const ToDoList = () => {

    const [inputValue, setInputValue ] = useState("");

    const [taskList, setTaskList] = useState([
		{
			description: "Brush your tooth",
			status: true
		},
		{
			description: "Learn React",
			status: true
		},
		{
			description: "Cook breakfast",
			status: true
		}
	])

    return (
    <>
        <div className="input-group mb-3">
            <input type="text" className="form-control" onChange={event => setInputValue(event.target.value)} value={inputValue} placeholder="Whats need to be done?"/>
        </div>
        <h1>{inputValue}</h1>
        <ul className="list-group">
            {
                taskList.map((elem, index) => {
                    return (
                        <li key={index} className="list-group-item">{elem.description}</li>
                    )
                })
            }
        </ul>
    </>)
}

