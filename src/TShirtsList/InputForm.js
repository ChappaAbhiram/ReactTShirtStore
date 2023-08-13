import React, { Fragment, useState } from 'react';

const InputForm = (props) => {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Price, setPrice] = useState('');
  const [LargeNo, setLargeNo] = useState(''); // Change to LargeNo
  const [MediumNo, setMediumNo] = useState(''); // Change to MediumNo
  const [SmallNo, setSmallNo] = useState(''); // Change to SmallNo

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const largeChangeHandler = (event) => {
    setLargeNo(event.target.value);
  };
  const mediumChangeHandler = (event) => {
    setMediumNo(event.target.value);
  };
  const smallChangeHandler = (event) => {
    setSmallNo(event.target.value);
  };
  const formHandler = (event) => {
    event.preventDefault();
    const newProduct = {
      id: Name,
      desc: Description,
      price: Price,
      largeQuantity: LargeNo, // Change to largeQuantity
      mediumQuantity: MediumNo, // Change to mediumQuantity
      smallQuantity: SmallNo, // Change to smallQuantity
    };
    localStorage.setItem(Name, JSON.stringify(newProduct));
    props.onUpdateItems(newProduct);
    setName('');
    setDescription('');
    setPrice('');
    setLargeNo('');
    setMediumNo('');
    setSmallNo('');
  };

  return (
    <Fragment>
      <h1>Details of Tshirts</h1>
      <form onSubmit={formHandler}>
        <label htmlFor="Name">Name of T-Shirt</label>
        <input
          type="text"
          id="Name"
          name="Name"
          value={Name}
          onChange={nameChangeHandler}
          required
        />
        <label htmlFor="Description">Description</label>
        <input
          type="text"
          id="Description"
          name="Description"
          value={Description}
          onChange={descriptionChangeHandler}
          required
        />
        <label htmlFor="Price">Selling Price</label>
        <input
          type="number"
          id="Price"
          name="Price"
          value={Price}
          onChange={priceChangeHandler}
          required
        />
        <label htmlFor="Large">Large</label>
        <input
          type="number"
          id="Large"
          name="Large"
          value={LargeNo}
          onChange={largeChangeHandler}
          required
          min="0"
        />
        <label htmlFor="Medium">Medium</label>
        <input
          type="number"
          id="Medium"
          name="Medium"
          value={MediumNo}
          onChange={mediumChangeHandler}
          required
          min="0"
        />
        <label htmlFor="Small">Small</label>
        <input
          type="number"
          id="Small"
          name="Small"
          value={SmallNo}
          onChange={smallChangeHandler}
          required
          min="0"
        />
        <button type="submit">Add Product</button>
      </form>
    </Fragment>
  );
};

export default InputForm;
