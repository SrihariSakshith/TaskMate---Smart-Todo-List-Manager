import React, {useState} from 'react';

const AddTodo = (props) => {
  const btn = {
    color: 'white',
    backgroundColor: 'green',
    cursor: 'pointer',
    padding: '5px 10px',
  };

  const subcontainer = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  };
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  let submit=(e)=>{
    e.preventDefault();
    if(!title || !desc) alert("Title or Description cannot be blank");
    else {
      // Call the addTodo function passed via props
      props.addTodo(title, desc);
      setTitle(""); // Clear the form after submission
      setDesc("");  // Clear the form after submission
    }
  };
  
  return (
    <div>
      <h2 align="center">Add a Todo</h2>
      <br />
      <form onSubmit={submit}>
        <label htmlFor="work">Title:
          <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="work" name="work" size="60" style={{ marginLeft: "80px" }} />
        </label>
        <br /><br />
        <label htmlFor="desc">Description:
          <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" name="desc" size="60" style={{ marginLeft: "30px" }} />
        </label>
        <br /><br />
        <div style={subcontainer}>
          <input type="submit" value="Add Todo" style={btn} />
        </div>
      </form>
      <br /><br />
    </div>
  );
}

export default AddTodo;
