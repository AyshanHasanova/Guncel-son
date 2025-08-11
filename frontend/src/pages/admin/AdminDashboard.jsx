

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '../../components/admin/ProductList';
import ProductForm from '../../components/admin/ProductForm'; // Yeni məhsul üçün
import ProductEdit from '../../components/admin/ProductEdit'; // Redaktə üçün

const AdminDashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="new" element={<ProductForm />} />
        <Route path="edit/:id" element={<ProductEdit />} />
      </Routes>
    </>
  );
};

export default AdminDashboard;