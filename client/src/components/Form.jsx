import React, { useState } from 'react';

const INITIAL_FORM_DATA = { name: '', age: '' };

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const handleInputChange = field => e => setFormData({ ...formData, [field]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(formData);

    setFormData(INITIAL_FORM_DATA);
  };

  return (
    <div className='add-player-form'>
      <form onSubmit={handleSubmit}>
        <input type='text' value={formData.name} onChange={handleInputChange('name')} placeholder='Player Name' />
        <input type='text' value={formData.age} onChange={handleInputChange('age')} placeholder='Player Age' />
        <input type='submit' value='Add Player' />
      </form>
    </div>
  );
};

export default Form;
