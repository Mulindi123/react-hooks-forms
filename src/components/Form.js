import React, { useState } from "react";

function Form(props) {
  
  return (
    <div>
    <form>
      <input type="text" value={props.firstName} onChange={props.handleFirstNameChange} />
      <input type="text" value={props.lastName} onChange={props.handleLastNameChange}/>
      <button type="submit">Submit</button>
    </form>
      <br />
    <form>
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input
        type="checkbox"
        id="newsletter"
        onChange={props.handleNewsletterChange}
        checked={props.newsletter}
      />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Form;
