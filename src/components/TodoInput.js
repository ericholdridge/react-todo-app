import React from "react"


const TodoInput = ({value, setValue, handleSubmit}) => {
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

export default TodoInput;