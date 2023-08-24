import { useState } from "react"
import Form from "./Form"

function ParentComponent(){

  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsletter, setNewsletter] = useState(false);


  function handleFirstNameChange(e){
    setFirstName(e.target.value)
  }
function handleLastNameChange(e){
  setLastName(e.target.value)
}

function handleNewsletterChange(event) {
  // .checked, not .value!
  setNewsletter(event.target.checked);
}


    return <div>
        <Form 
             firstName={firstName}
             lastName={lastName}
             handleFirstNameChange={handleFirstNameChange}
             handleLastNameChange={handleLastNameChange}
             newsletter={newsletter}
             handleNewsletterChange={handleNewsletterChange}
        />
    </div>
}
export default ParentComponent