import React from 'react'
import { useState } from 'react'

const FormValidation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    comments: '',
    isCheckBox: false,
    mode: '',
    favCar: '',
  });

  const changeHandler = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <div>
          <p>Enter your First Name: </p>
          <input 
            type='text' 
            placeholder='First Name' 
            onChange={changeHandler} 
            name="firstName"
            value={formData.firstName} // Controlled input
          /> 
        </div>

        <div>
          <p>Enter your Last Name: </p>
          <input 
            type='text' 
            placeholder='Last Name' 
            onChange={changeHandler} 
            name="lastName"
            value={formData.lastName}
          />
        </div>

        <div>
          <p>Enter your email: </p>
          <input
            type='email'
            placeholder='Email'
            onChange={changeHandler}
            name="email"
            value={formData.email}
          />
        </div>

        <div>
          <p>Enter your password: </p>
          <input
            type='password'
            placeholder='Password'
            onChange={changeHandler}
            name="password"
            value={formData.password}
          />
        </div>

        <div>
          <p>Enter your comments: </p>
          <textarea
            placeholder='Comments'
            onChange={changeHandler}
            name="comments"
            value={formData.comments}
          />
        </div>

        <div className='flex'>
          <input
            type='checkbox'
            onChange={changeHandler}
            name="isCheckBox"
            id="isCheckBox"
            checked={formData.isCheckBox}
          />
          <label htmlFor='isCheckBox'>Accept terms and conditions</label>
        </div>

        <div>
          <input
            type="radio"
            onChange={changeHandler}
            name='mode'
            value="Online"
            id='Online'
            checked={formData.mode === 'Online'}
          />
          <label htmlFor='Online'>Online</label>
        </div>

        <div>
          <input
            type="radio"
            onChange={changeHandler}
            name='mode'
            value="Offline"
            id='Offline'
            checked={formData.mode === 'Offline'}
          />
          <label htmlFor='Offline'>Offline</label>
        </div>

        <div>
          <label htmlFor='favCar'>Tell me your favourite car? </label>
          <select
            onChange={changeHandler}
            name='favCar'
            value={formData.favCar}
            id='favCar'
          >
            <option value=''>Select Car</option>
            <option value='BMW'>BMW</option>
            <option value='Audi'>Audi</option>
            <option value='Mercedes'>Mercedes</option>
            <option value='Ferrari'>Ferrari</option>
            <option value='Lamborghini'>Lamborghini</option>
          </select>
        </div>

        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default FormValidation;