// Maan Patel
// COMP229 Midterm
import React, { useReducer } from 'react';
import './App.css';


const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
      
  }
}

const initialState = {
  name: "",
  description: "",
  category: "",
  quantity: "",
  price: ""
};



function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: "UPDATE", field: name, value: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`\n
    
    Name: ${state.name},
    Description: ${state.description},
    Category: ${state.category},
    Quantity: ${state.quantity},
    Price: ${state.price}
    \n
    `);
  };

  const cancel = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div className='container'>
    
    <div className="form">
    <form onSubmit={handleSubmit}>
    
    <h3>New Product</h3>
  
    <input type="text" name="name" value={state.name} className="form-control" placeholder="Name" onChange={handleChange} required/>
    <br/>
    <input type="text" name="description" value={state.description} className="form-control"  placeholder="Description"  onChange={handleChange} required/>
    <br/>
    <input type="text" name="category" value={state.category} className="form-control"  placeholder="Category"  onChange={handleChange} required />
    <br/>
    <input type="number" name="quantity"value={state.quantity} className="form-control"  placeholder="Quantity"  onChange={handleChange} required />
    <br/>
    <input type="number"  className="form-control"  placeholder="Price"  onChange={handleChange}  name="price" value={state.price} required/>
    <br/>
    
    <div class="d-grid gap-2 col-6 mx-auto">
    <button type="submit" className="btn btn-primary">Submit</button>
    <button type="reset" className="btn btn-secondary" onClick={cancel}>Cancel</button>
   </div>

  </form>
  <footer>
    <hr/>
    &copy; 2023 Maan Patel
 </footer>
  </div>
 </div>
);
}

export default App;

