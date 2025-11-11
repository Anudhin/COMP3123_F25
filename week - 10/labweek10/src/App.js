import React, { useState } from "react";
import "./App.css";

export default function App() {
  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Nova Scotia",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
  ];

  const [form, setForm] = useState({
    email: "",
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(null);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(form);
  };

  return (
    <div className="page">
      <div className="panel">
        <h1 className="title">Data Entry Form</h1>

        <form className="grid" onSubmit={onSubmit}>
          <div className="field span-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={onChange}
              required
            />
          </div>

          <div className="field span-3">
            <label>Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={form.fullName}
              onChange={onChange}
              required
            />
          </div>

          <div className="field span-6">
            <label>Address</label>
            <input
              type="text"
              name="address1"
              placeholder="1234 Main St"
              value={form.address1}
              onChange={onChange}
              required
            />
          </div>

          <div className="field span-6">
            <label>Address 2</label>
            <input
              type="text"
              name="address2"
              placeholder="Apartment, studio, or floor"
              value={form.address2}
              onChange={onChange}
            />
          </div>

          <div className="field span-2">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={onChange}
              required
            />
          </div>

          <div className="field span-2">
            <label>Province</label>
            <select
              name="province"
              value={form.province}
              onChange={onChange}
              required
            >
              <option value="">Choose...</option>
              {provinces.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>

          <div className="field span-2">
            <label>Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={form.postalCode}
              onChange={onChange}
              required
            />
          </div>

          <div className="span-6 center">
            <label className="checkbox">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={onChange}
                required
              />
              <span>Agree Terms & Condition?</span>
            </label>
          </div>

          <div className="span-6 center">
            <button type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>

      {submitted && (
        <div className="result-box">
          <p><b className="label">Email:</b> {submitted.email}</p>
          <p><b className="label">Full Name:</b> {submitted.fullName}</p>
          <p><b className="label">Address:</b> {submitted.address1}</p>
          <p><b className="label">City:</b> {submitted.city}</p>
          <p><b className="label">Province:</b> {submitted.province}</p>
          <p><b className="label">Postal Code:</b> {submitted.postalCode}</p>
        </div>
      )}
    </div>
  );
}
