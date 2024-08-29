import { useLocation } from 'react-router-dom';
import 'antd/dist/reset.css';
import { Button, Modal, Table } from 'antd';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

function CompareProducts() {
  const location = useLocation();
  const { selectedProductIds: initialSelectedProductIds } = location.state || { selectedProductIds: [] };
  const [products, setProducts] = useState([]);
  const [selectedProductIds, setSelectedProductIds] = useState(new Set(initialSelectedProductIds));
  const [modalVisible, setModalVisible] = useState(false);
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = useCallback(async () => {
    try {
      const response = await Promise.all(
        Array.from(selectedProductIds).map(id =>
          axios.get(`https://dummyjson.com/products/${id}`)
        )
      );
      setProducts(response.map(res => res.data));
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  }, [selectedProductIds]);

  useEffect(() => {
    if (selectedProductIds.size > 0) {
      fetchProducts();
    }
  }, [fetchProducts]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(res => setAllProducts(res.data.products))
      .catch(err => console.error('Error fetching all products:', err));
  }, []);

  const toggleModal = () => {
    setModalVisible(prev => !prev);
  };

  const handleSelectProduct = (productId) => {
    setSelectedProductIds(prev => {
      const newSelection = new Set(prev);
      if (newSelection.has(productId)) {
        newSelection.delete(productId);
      } else if (newSelection.size < 4) {
        newSelection.add(productId);
      }
      return newSelection;
    });
  };

  const handleRemoveProduct = (id) => {
    setSelectedProductIds(prev => {
      const newSelection = new Set(prev);
      newSelection.delete(id);
      return newSelection;
    });
  };

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id', width: 50 },
    { title: 'Name', dataIndex: 'title', key: 'title', width: 150 },
    { title: 'Price', dataIndex: 'price', key: 'price', width: 100 },
    { title: 'Category', dataIndex: 'category', key: 'category', width: 150 },
    {
      title: 'Actions',
      key: 'actions',
      width: 100,
      render: (_, record) => (
        <Button
          type="primary"
          onClick={() => handleSelectProduct(record.id)}
          disabled={selectedProductIds.has(record.id) || selectedProductIds.size >= 4}
        >
          {selectedProductIds.has(record.id) ? 'Selected' : 'Add'}
        </Button>
      ),
    },
  ];

  return (
    <div className="mt-12 ml-8 p-4 border">
      <h1 className="text-2xl font-bold">Compare Products</h1>
      <Button
        type="primary"
        className="mb-4"
        onClick={toggleModal}
        disabled={selectedProductIds.size >= 4}
      >
        Add More Products
      </Button>
      <div className="flex flex-wrap">
        {products.map(product => (
          <div key={product.id} className="w-1/2 p-4 border m-2">
            <h2 className="text-xl font-bold">{product.title}</h2>
            <p><strong>Price:</strong> ${product.price}</p>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Description:</strong> {product.description}</p>
            <Button
              type="danger"
              onClick={() => handleRemoveProduct(product.id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

<Modal
        title="Add More Products"
        open={modalVisible}
        onOk={toggleModal}
        onCancel={toggleModal}
        footer={null}
        width={800}
        style={{ maxHeight: '60vh', overflow: 'hidden' }} 
      >
        <div style={{ maxHeight: '60vh', overflowY: 'hidden' }}> 
          <Table
            dataSource={allProducts}
            columns={columns}
            rowKey="id"
            pagination={false}
            scroll={{ y: 400 }}
            style={{ maxWidth: '100%' }} 
          />
        </div>
      </Modal>

    </div>
  );
}

export default CompareProducts;
