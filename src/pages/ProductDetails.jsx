import { Table, Button } from 'antd'
import { useState, useEffect } from 'react'
import 'antd/dist/reset.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { CheckOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';

function ProductDetails() {
  const [products, setProducts] = useState([]);
  const [selectedProductIds, setSelectedProductIds] = useState(new Set());
  const navigate = useNavigate();
  

  useEffect(()=> {
    // fetching the data from the API
    axios.get('https://dummyjson.com/products')
    .then(res => setProducts(res.data.products))
    .catch(err => console.error('Error fetching products:', err));
  }, []);


  const handleCompareToggle = (productId) => {
    setSelectedProductIds(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(productId)) {
        newSelection.delete(productId);
      } else {
        newSelection.add(productId);
      }
      return newSelection;
    });
  };

  const handleCompareRedirect = () => {
    navigate('/compare', { state: { selectedProductIds: Array.from(selectedProductIds) } });
  };


  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', width: 50, sorter: (a, b) => a.id - b.id },
    { title: 'Name', dataIndex: 'title', key: 'title', width: 150, sorter: (a, b) => a.title.localeCompare(b.title) },
    { title: 'Price', dataIndex: 'price', key: 'price', width: 100, sorter: (a, b) => a.price - b.price },
    { title: 'Description', dataIndex: 'description', key: 'description', width: 200 },
    { title: 'Discount %', dataIndex: 'discountPercentage', key: 'discountPercentage', width: 100, sorter: (a, b) => a.discountPercentage - b.discountPercentage },
    { title: 'Brand', dataIndex: 'brand', key: 'brand', width: 150, sorter: (a, b) => a.brand.localeCompare(b.brand) },
    { title: 'Category', dataIndex: 'category', key: 'category', width: 150, sorter: (a, b) => a.category.localeCompare(b.category) },
    { title: 'Image', dataIndex: 'image', key: 'image', width: 100, render: (text, record) => <img src={record.thumbnail} alt={record.title} style={{ width: 50 }} /> },
    {
      title: 'Actions',
      key: 'actions',
      width: 150,
      render: (_, record) => (
        <Button
          type="primary"
          icon={selectedProductIds.has(record.id) ? <CheckOutlined /> : <PlusOutlined />}
          onClick={() => handleCompareToggle(record.id)}
          disabled={selectedProductIds.has(record.id)}
          className={selectedProductIds.has(record.id) ? 'bg-red-500' : 'bg-blue-500'}
        >
          {selectedProductIds.has(record.id) ? 'Compared' : 'Compare'}
        </Button>
      ),
    },
  ];

  return (
    <>
      <div className="mt-12 ml-4 p-4" >
        <h1 className="text-2xl font-bold">Product Details</h1>

        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={handleCompareRedirect}
          disabled={selectedProductIds.size === 0}
          className="mt-4"
        >
          Compare Selected Products
        </Button>

        <Table dataSource={products}
         columns={columns}
         rowKey="id"
         pagination={{ pageSize: 10 }}
         scroll={{ y: 400 }}
         className="mt-4 custom-table"
         rowClassName={(record) =>
           selectedProductIds.has(record.id) ? 'bg-yellow-100' : ''
         }/>
      </div>
    </>
  )
}

export default ProductDetails





