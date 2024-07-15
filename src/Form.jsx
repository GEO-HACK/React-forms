import React from "react";

export default function Form() {
  const id = React.useId();

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: "",    
    isSubscribed: false,
    employment: "",
    favColor: "",

  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  function handleChanges(event) {
    //using the state to give React access for the values
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={id + "-firstName"}>first Name</label>
      <input
        type="text"
        onChange={handleChanges}
        name="firstName"
        placeholder="First Name"
        id={id + "-firstName"}
        value={formData.firstName}
      />

      <label htmlFor={id + "-lastName"}>last Name</label>
      <input
        type="text"
        onChange={handleChanges}
        name="lastName"
        placeholder="last Name"
        id={id + "-lastName"}
        value={formData.lastName}
      />

      <label htmlFor={id + "-email"}>email</label>
      <input
        type="email"
        onChange={handleChanges}
        name="email"
        placeholder="@gmail.com"
        id={id + "-email"}
        value={formData.email}
      />
      <label htmlFor={id + "-comment"}>Comment</label>
      <textarea
        name="comment"
        onChange={handleChanges}
        value={formData.comment}
        id={id + "-comment"}
      ></textarea>

      <input
       type="checkbox"
       name = "isSubscribed"
       value={formData.isSubscribed}
       id={id + "-isSubscribed"}
       onChange={handleChanges}       
       />
         <label htmlFor={id + "-isSubscribed"}>Subscribe</label>

         <br />
         <br />
         <fieldset>
            <legend>Current employment status</legend>

            <input
            type="radio"
            name="employment"
            value="unemployed"
            id={id + "-unemployed"}
            onChange={handleChanges}
            />
            <label htmlFor={id + "-unemployed"}>unemployed</label>
            <br />
            <input
             type="radio"
             name="employment"
             value="part-time"
             id={id + "-partTime"}
             onChange={handleChanges}
              />
            <label htmlFor={id + "-partTime"}>part-time</label>
            <br />
            <input
             type="radio"
             name="employment"
             value="full-time"
             id={id + "-fullTime"}
             onChange={handleChanges}
              />
            <label htmlFor={id + "-fullTime"}>full-time</label>  
            <br />  
         </fieldset>
            <br />
            <select 
             id={id + "-favColor"}
             name="favColor"
             onChange={handleChanges}
             value={formData.favColor}
             >
                <option value=""> --please select below</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="black">Black</option>
                <option value="white">White</option>

             </select>
             <br />
             <br />

      <button>submit</button>
    </form>
  );
}
