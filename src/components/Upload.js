import React, { useState } from 'react';

const Upload = () => {
  const [image, setImage] = useState('');
  const [firstList, setFirstList] = useState([]);
  const [secondList, setSecondList] = useState([]);

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleFirstListChange = (event) => {
    const newList = event.target.value.split(',');
    setFirstList(newList);
  };

  const handleSecondListChange = (event) => {
    const newList = event.target.value.split(',');
    setSecondList(newList);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('image', image);
    formData.append('Ingredients', firstList.join(','));
    formData.append('instructions', secondList.join(','));

    try {
      const response = await fetch('http://localhost:8080/SaveForm', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const responseBody = await response.text();
        console.log('Response:', responseBody);
      } else {
        console.error('Request failed with status:', response.status);
      }
    } catch (error) {
      console.error('Request error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Image:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <br />
      <label>
        First List:
        <textarea type="text" value={firstList} onChange={handleFirstListChange} />
      </label>
      <br />
      <label>
        Second List:
        <textarea type="text" value={secondList} onChange={handleSecondListChange} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Upload;
