import { useState, useContext } from "react";
import { addCollection } from '../firebase';
import CartContext from '../context/CartContext';

export const useForm = (initialForm, validateForm, order) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const { cart, totalItemPrices, setBuyer } = useContext(CartContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validateForm(form));

    if (Object.keys(errors).length === 0) {
      const date = Date.now();
      const today = new Date(date).toDateString();
      console.log(today);
      const _buyer = await addCollection("buyers", { buyer: form, item: {cart}, date: today, total: totalItemPrices.toFixed(2) })
      setBuyer(_buyer);
      order(_buyer);
      console.log("Form is valid", form);
      setForm(initialForm);
    }
    else {
      return;
    }
  };

  return {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};