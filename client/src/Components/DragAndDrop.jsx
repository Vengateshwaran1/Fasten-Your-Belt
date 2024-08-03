import { useState } from 'react';

function DragAndDrop() {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      className={`drag-and-drop-container ${dragActive ? 'drag-active' : ''}`}
    >
      <input
        id="file-input"
        type="file"
        className="file-input sr-only"
        onChange={handleChange}
      />
      <label
        htmlFor="file-input"
        className="file-label block text-gray-500 font-medium mb-2"
      >
        {file ? file.name : 'Drag and drop a file here or click to upload photo'}
      </label>
      {file && (
        <div className="file-preview mt-2">
          <span className="file-name">{file.name}</span> -{' '}
          <span className="file-size">{file.size} bytes</span>
        </div>
      )}
    </div>
  );
}

export default DragAndDrop;