import { useEffect, useState } from "react";

export function Students(){
 const [todos,setTodos]=useState(()=>{
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
        return JSON.parse(savedTodos);
    }
    else{
     return []
    }
 });

 const [editing,setEditing]=useState(false);
 const [todo,setTodo]=useState("");
 const [current,setCurrent]=useState({});

 useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos));
 },[todos])

 function add(e){
  e.preventDefault();
 if(todo !== ""){
  setTodos([...todos,{
    id:todos.length+1,
    text:todo
  }])
}
}


function rem(id){
 const newtodos = todos.filter((todo)=>{
    return todo.id !== id;
 })
 setTodos(newtodos);
}

function modify(todo){
 setEditing(true);
 setCurrent({...todo});
}

function update(e){
    e.preventDefault();
    console.log(current);
    update_todo(current.id,current);
}

function update_todo(id,updated){
    const updatedItem = todos.map((todo)=>{
        return todo.id === id ? updated : todo;
    })
    setEditing(false);
    setTodos(updatedItem);
}


return  <>
{editing ?
 ( <form>
  <input type="text" placeholder="update...." onChange={(e)=>{
    setCurrent({...current,text:e.target.value});
  }}/>
  <button type="submit" onClick={update}>update</button>
 </form>
 ) : (<form>
    <input type="text" onChange={(e)=>{ setTodo(e.target.value); }}/>
    <button type="submit" onClick={add} >add</button>
  </form>
)}
<ul>
{
        todos.map((todo)=>{
            return <div key={todo.id}>
            <li>{todo.text}
            <button onClick={ ()=>{rem(todo.id);}}> x </button>
            <button onClick={()=>{modify(todo); }}>edit</button>
             </li>
</div>
        })
}
</ul>
</>
}