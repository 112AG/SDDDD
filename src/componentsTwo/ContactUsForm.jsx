import React, { useState } from "react";
import { Link } from "react-router-dom";


function ContactUsForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    query: "",
    loanType: "",
    acceptedTerms: false,
  });

  const [errors, setErrors] = useState({});

  const loanOptions = [
    "Working Capital Loans",
    "Business Loan",
    "Personal Loan",
    "Home Loan",
    "Loan Against Property",
    "Auto Loan",
    "Health Insurance",
    "Life Insurance",
    "General Insurance",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "Required";
    if (!formData.lastName.trim()) newErrors.lastName = "Required";
    if (!formData.phone.trim()) newErrors.phone = "Required";
    else if (!/^\d{10,15}$/.test(formData.phone))
      newErrors.phone = "Invalid number";
    if (!formData.email.trim()) newErrors.email = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";
    if (!formData.query.trim()) newErrors.query = "Required";
    if (!formData.loanType) newErrors.loanType = "Required";
    if (!formData.acceptedTerms)
      newErrors.acceptedTerms =
        "You must accept the Terms & Conditions and Privacy Policy";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formData);
      alert("Form submitted successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        query: "",
        loanType: "",
        acceptedTerms: false,
      });
      setErrors({});
      
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* First Name */}
          <div>
            <label className="block text-sm mb-1">First Name</label>
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              className="w-full p-2 bg-[#F4F4F4] text-black placeholder:text-gray-500 rounded-md shadow-sm focus:outline-none"
            />
            {errors.firstName && (
              <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm mb-1">Last Name</label>
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              className="w-full p-2 bg-[#F4F4F4] text-black placeholder:text-gray-500 rounded-md shadow-sm focus:outline-none"
            />
            {errors.lastName && (
              <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-1">Phone Number</label>
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              className="w-full p-2 bg-[#F4F4F4] text-black placeholder:text-gray-500 rounded-md shadow-sm focus:outline-none"
            />
            {errors.phone && (
              <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email Address"
              className="w-full p-2 bg-[#F4F4F4] text-black placeholder:text-gray-500 rounded-md shadow-sm focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Query */}
          <div>
            <label className="block text-sm mb-1">
              Tell Us about your query
            </label>
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              placeholder="Enter Your Query"
              className="w-full p-2 h-20 bg-[#F4F4F4] text-black placeholder:text-gray-500 rounded-md shadow-sm focus:outline-none"
            />
            {errors.query && (
              <p className="text-red-400 text-xs mt-1">{errors.query}</p>
            )}
          </div>

          {/* Loan Type */}
          <div>
            <label className="block text-sm mb-1">Type of Loans</label>
            <select
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              className="w-full p-2 bg-[#F4F4F4] text-black placeholder:text-gray-500 rounded-md shadow-sm focus:outline-none"
            >
              <option value="">Select Loan Type</option>
              {loanOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.loanType && (
              <p className="text-red-400 text-xs mt-1">{errors.loanType}</p>
            )}
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="mt-4 w-full">
          <label className="flex items-start justify-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              name="acceptedTerms"
              checked={formData.acceptedTerms}
              onChange={handleChange}
              className="mt-1"
            />
            <span className="text-xs text-white">
              I have read and accepted the{" "}
              <Link to='/terms-condition' className="text-yellow-300 underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to='/privacy-policy' className="text-yellow-300 underline">Privacy Policy</Link>
            </span>
          </label>
          {errors.acceptedTerms && (
            <p className="text-red-400 text-xs mt-1 text-center">{errors.acceptedTerms}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-yellow-400 text-[#003A78] font-bold px-8 py-2 rounded-md hover:bg-yellow-300 transition"
          >
            Send Us a Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
