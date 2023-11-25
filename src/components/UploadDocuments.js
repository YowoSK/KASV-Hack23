import React, { useState } from 'react';

const UploadDocument = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <App /> {/* This is where your App component will be rendered */}
      <input type="file" onChange={handleFileChange} />
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};
export default UploadDocument;