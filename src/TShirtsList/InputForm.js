import React,{Fragment,useState} from 'react';
const InputForm = () =>{
    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [Price, setPrice] = useState("");
    const [Large, setLarge] = useState("");
    const [Medium, setMedium] = useState("");
    const [Small, setSmall] = useState("");
    const nameChangeHandler=(event)=>{
        setName(event.target.value);
    }
    const DescriptionChangeHandler=(event)=>{
        setDescription(event.target.value);
    }
    const PriceChangeHandler=(event)=>{
        setPrice(event.target.value)
    }
    const LargeChangeHandler=(event)=>{
        setLarge(event.target.value)
    }
    const MediumChangeHandler=(event)=>{
        setMedium(event.target.value)
    }
    const SmallChangeHandler=(event)=>{
        setSmall(event.target.value)
    }
    const formHandler = (event)=>{
        event.preventDefault();
        const newProduct = {
            Name: Name,
            desc: Description,
            price: Price,
            largeno : Large,
            Mediumno : Medium,
            Smallno : Small,
          };
          localStorage.setItem(Name, JSON.stringify(newProduct));
          setName("");
          setDescription("");
          setPrice("");
          setLarge("");
          setMedium("");
          setSmall("");  
    };

    return <Fragment className="Container">
        <h1>Details of Tshirts</h1>
        <form onSubmit={formHandler}>
        <label htmlFor="Name">Name of T-Sshirt</label>
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
            onChange={DescriptionChangeHandler}
            required
          />
          <label htmlFor="Price">Selling Price</label>
          <input
            type="number"
            id="Price"
            name="Price"
            value={Price}
            onChange={PriceChangeHandler}
            required
          />
          <label htmlFor="Large">Large</label>
          <input
          type="number"
          id="Large"
          name="Large"
          value={Large}
          onChange={LargeChangeHandler}
          required
          min="0"
          />
          <label htmlFor="Medium">Medium</label>
          <input
          type="number"
          id="Medium"
          name="Medium"
          value={Medium}
          onChange={MediumChangeHandler}
          required
          min="0"
          />
          <label htmlFor="Small">Small</label>
          <input
          type="number"
          id="Small"
          name="Small"
          value={Small}
          onChange={SmallChangeHandler}
          required
          min="0"
          />
          <button type="submit">Add Product</button>
          </form>

    </Fragment>
};
export default InputForm;