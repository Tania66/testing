import { LuCalendar } from "react-icons/lu";
import { ButtonCalendar, ButtonSubmit, Form, FormInner, FormText, FormTitle, IconConteiner, Input, MyCustomCalendar, TextArea } from "./AdvertForm.styled";
import 'react-calendar/dist/Calendar.css';
import moment from "moment";
import { useState } from "react";


const AdvertForm = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [date, setDate] = useState(new Date());
const [comment, setComment] = useState("");
const [showCalendar, setShowCalendar] = useState(false);





const handleNameChange = (event) =>{
  setName(event.target.value);
}
const handleEmailChange = event =>{
  setEmail(event.target.value)
}
const handleCommentChange = event =>{
  setComment(event.target.value);
}
const handleDataChange = (value , event) =>{
  setDate(value, event);
  setShowCalendar(false);
}

const handleSubmit = event =>{
  event.preventDefault();
  setName('');
  setEmail('');
  setComment('');
  setDate('');
}


  return (
    <FormInner>
      <FormTitle>Book your campervan now</FormTitle>
        <FormText>Stay connected! We are always ready to help you.</FormText>
      <Form  onSubmit={handleSubmit}>
<label >
  <Input type="text" placeholder="Name" value={name} onChange={handleNameChange}/>
</label>
<label >
  <Input type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
</label>
<label >
  <IconConteiner>
   <Input type="data" placeholder="Booking date" value={moment(date).format("DD-MM-YYYY").toString()} onChange={handleDataChange}/>  
   <ButtonCalendar onClick={() => setShowCalendar(!showCalendar)}><LuCalendar size={20}/></ButtonCalendar> 
   {showCalendar && <MyCustomCalendar locale="en"  date={date} setDate={setDate} onChange={handleDataChange} />}

  </IconConteiner>

</label>
<label >
 <TextArea placeholder="Comment" value={comment} onChange={handleCommentChange}></TextArea>
</label>
<ButtonSubmit type="submit">Send</ButtonSubmit>
      </Form>
    </FormInner>
  )
}

export default AdvertForm
