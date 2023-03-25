import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Form, Button, Container } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from "axios";

const url=`https://api.trello.com/1/cards?idList=5abbe4b7ddc1b351ef961414&key=30fd46ec65416d6a2769b135f1da4053&token=ATTA4e37ddbddb825e06cd7125ed20bbba34b5af54ceb4d879f63751bd06a8f0e06d0D7B6632`;
function App() {
  const [event,setEvent]=useState([]);
  const [name, setName] = useState("");
  const [desc,setDesc]=useState("");
  const[startd,setStartd]=useState("");
  const[dued,setDued]=useState("");
  
  useEffect(()=>{
    axios.get(url).then((response)=>{
      setEvent(response.data);
    })
  },[]);
function createEvent(){
  axios
  .post(url,{name,desc,startd,dued}).then((response)=>{
   setEvent(response.data);
  });
}
  const handleClick=(e)=>{
   e.preventDefault();
   createEvent();
   setDesc("");
   setName("");
   setStartd("");
   setDued("");
   console.log(name);
   console.log(desc);
   console.log(startd);
   console.log(dued);
  };

  return (
    <div className='divi'>
      <Container className='cont'>
        <Form >
          <h1 className='fgk'><strong>BASIC FORM</strong></h1>
          <Form.Group className='fg' controlId="formName">
            <Form.Label><strong>Name</strong></Form.Label>
            <Form.Control type="text" placeholder="Enter name" onChange={(e)=>{setName(e.target.value);}} value={name}/>
          </Form.Group>

          <Form.Group className='fg' controlId="form.Textarea">
            <Form.Label><strong>Description</strong></Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Decsription" onChange={(e)=>{setDesc(e.target.value);}} value={desc} />
          </Form.Group>

          <Form.Group className='fg' controlId="startdate">
            <Form.Label><strong>Start date</strong></Form.Label>
            <Form.Control type="date" name="startdate" placeholder="Start date" onChange={(e)=>{setStartd(e.target.value);}} value={startd} />
          </Form.Group>

          <Form.Group className='fg' controlId="duedate">
            <Form.Label><strong>Due date</strong></Form.Label>
            <Form.Control type="date" name="duedate" placeholder="Due date" onChange={(e)=>{setDued(e.target.value);}} value={dued}/>
          </Form.Group>
          <Form.Group className='fgb'>
            <Button variant="primary" onClick={handleClick}><strong>Submit</strong></Button>
          </Form.Group>
        </Form>
      </Container>
    </div>

  );
}

export default App;
