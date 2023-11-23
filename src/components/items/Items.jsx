
import { Table, Button, Space } from 'antd';
import "./items.css"
import { useEffect , useState} from 'react';
import { useStore } from "../../store";
import { Modal } from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

const EditModal = () => {
  const { open, setOpen, title, price, setTitle, setPrice, id } = useStore(); 
   const [loading, setLoading] = useState(false);
const [item,setItem]=useState([]);

  const handleEdit = () => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/${id}`, {
      method: "PUT" ,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        price,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
        setOpen(false)
        alert(`${id} is updated`);
      });
  };

  return (
    <Modal open={open} onClose={() => setOpen(false)} center>
      <h2>Edit Product</h2>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => handleEdit()}>{loading ? "Lodaing...": "Save"}</button>
    </Modal>
  );
};




const Items = () => {
  const { setTitle, setPrice,setID,setOpen } = useStore();
  const [products ,setProducts]=useState([]);
const [item,setItem]=useState([]);
  // ...
  const getProducts = async () => {
    try { const res = await fetch("https://dummyjson.com/products")
      let data=await res.json()
      setProducts(data.products)
    } catch (error) {
      console.log(error)
    }
  
  }

 

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        let res = await fetch(`https://dummyjson.com/products/${id}`, {
          method: 'DELETE',
        });
        let data = await res.json();
        setItem(data);
        if (data.isDeleted === true) {
          alert('deleted successfully');
          console.log(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };



  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
     
    },
    {
      title: 'title',
      dataIndex: 'title',
      key: 'title',
     
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'Description',
     
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
     

    },
    {
      title: 'Actions',
      key: 'actions',
     
      render: (item) => (
        <Space size="middle">
          <Button type="primary" onClick={() =>{ 
                                  setOpen(true);
                    setID(item.id);
                    setTitle(item.title);
                    setPrice(item.price);} }>Edit</Button>
          <Button className='' type="danger" onClick={() => handleDelete(item.id) }>Delete</Button>
        
        </Space>
      ),
    },
  ];
  useEffect(() => {getProducts()
  },
   []); 
  return (
    <div className='item'>
      <Table
        dataSource={products.map((e, i) => ({
          key: i,
          id: e.id,
          title: e.title,
          description: e.description,
          price: e.price+"$"
        }))}
        columns={columns}
      />
      <EditModal />
      </div>
  );
};

export default Items;
