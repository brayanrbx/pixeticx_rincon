import React from 'react';
import { useForm } from '../hooks/useForm';

const Form = () => {
  const initialForm  = {
    name: '',
    email: '',
    confirmEmail: '',
    phone: '',
    address: '',
  };

  const validateForm = (form) => {
    let error = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{3,}$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;

    if (!form.name.trim()) {
      error.name = 'Name is required';
    }
    else {
      if (!regexName.test(form.name)) {
        error.name = 'Name must be at least 3 characters without numbers';
      }
    }

    if (!form.email.trim()) {
      error.email = 'Email is required';
    }
    else {
      if (!regexEmail.test(form.email)) {
        error.email = 'Email is invalid';
      }
    }

    if (!form.confirmEmail.trim()) {
      error.confirmEmail = 'Confirm email is required';
    }
    else {
      if (form.email !== form.confirmEmail) {
        error.confirmEmail = 'Emails do not match';
      }
    }

    return error;
  };

  const { form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validateForm);

  return (
    <>
      <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" onSubmit={handleSubmit}>
        <div className="card-body">
          <div className="form-control">
            <label className="label">
                <span className="label-text">Name</span>
            </label>
            <input type="text" name="name" value={form.name} placeholder="Full name" className={`${(errors.name) ? "border-rose-500" : "focus:border-sky-500"} input input-bordered`} onBlur={handleBlur} onChange={handleChange} />
            {errors.name && <span className="text-xs font-bold text-rose-500">*{errors.name}</span>}
          </div>
          <div className="form-control">
            <label className="label">
                <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" value={form.email} placeholder="Email" className={`${(errors.email) ? "border-rose-500" : "focus:border-sky-500"} input input-bordered`} onBlur={handleBlur} onChange={handleChange} />
            {errors.email && <span className="text-xs font-bold text-rose-500">*{errors.email}</span>}
          </div>
          <div className="form-control">
            <label className="label">
                <span className="label-text">Confirm email</span>
            </label>
            <input type="email" name="confirmEmail" value={form.confirmEmail} placeholder="Confirm email" className={`${(errors.confirmEmail) ? "border-rose-500" : "focus:border-sky-500"} input input-bordered`} onBlur={handleBlur} onChange={handleChange} />
            {errors.confirmEmail && <span className="text-xs font-bold text-rose-500">*{errors.confirmEmail}</span>}
          </div>
          <div className="form-control">
            <label className="label">
                <span className="label-text">Phone number</span>
            </label>
            <input type="text" name="phone" value={form.phone} placeholder="Phone number" className="input input-bordered focus:border-sky-500"  onBlur={handleBlur} onChange={handleChange} />
          </div>
          <div className="form-control">
            <label className="label">
                <span className="label-text">Address</span>
            </label>
            <input type="text" name="address" value={form.address} placeholder="Address" className= "input input-bordered focus:border-sky-500" onBlur={handleBlur} onChange={handleChange} />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary hover:border-sky-500">Checkout</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;