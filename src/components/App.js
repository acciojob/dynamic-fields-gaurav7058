import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // State to hold fields
  const [fields, setFields] = useState([{ name: "", age: "" }]);

  // Handler to add new fields
  const handleAddFields = () => {
    setFields((prevFields) => [...prevFields, { name: "", age: "" }]);
  };

  // Handler to update field values
  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    setFields((prevFields) =>
      prevFields.map((field, i) =>
        i === index ? { ...field, [name]: value } : field
      )
    );
  };

  // Handler to remove a specific field
  const handleRemoveFields = (index) => {
    setFields((prevFields) => prevFields.filter((_, i) => i !== index));
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log each name and age
    fields.forEach((field) => {
      console.log(`Name: ${field.name}, Age: ${field.age}`);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} style={{ marginBottom: "10px" }}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={field.name}
              onChange={(e) => handleInputChange(index, e)}
              style={{ marginRight: "10px" }}
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={field.age}
              onChange={(e) => handleInputChange(index, e)}
              style={{ marginRight: "10px" }}
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveFields(index)}
              style={{ marginRight: "10px" }}
            >
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddFields} style={{ marginTop: "20px" }}>
          Add More
        </button>
        <button type="submit" style={{ marginTop: "20px", marginLeft: "10px" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
