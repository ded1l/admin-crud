// import  { useState } from 'react';
// import "./form.css"
// import { useStore } from "../../store";

// const Form = ({ setResults }) => {
//   const { results, setResults } = useStore();
//   const [query, setQuery] = useState('');

//   const handleSearch = async () => {
//     try {
//       const res = await fetch(`https://dummyjson.com/products?search=${query}`);
//       const data = await res.json();
//       setResults(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   const handleAdd =  () => {
//     try {
//       let res =  fetch(`https://dummyjson.com/products`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           title: "new product",
//           price: "100",
//         })
      
//       });
//       let data =  res.json();
//       setItem(data);
    
//         alert('added successfully');
//         console.log(data);
      
//     } catch (error) {
//       console.log(error);
//     }
//   }
    

//   return (
//     <div className="form">
//     <div className="search">
//       <input 
      
//         type="text" 
//         placeholder="Find Product" 
//         className="search-input" 
//         value={query}
//         if (searchKey === "enter")
//         setResults({e => setQuery(e.target.value)})
//       />
//     </div>

//           <button className="add-btn" onClick={handleAdd}>add new Product</button>
//           </div>
//   );
// };

// export default Form;