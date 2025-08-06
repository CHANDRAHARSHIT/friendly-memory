import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import './upload.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Upload = () => {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (loading) {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 100) {
            clearInterval(timer);
            return 100;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 200);
      return () => {
        clearInterval(timer);
      };
    }
  }, [loading]);

  const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setLoading(true);
      setProgress(0);
      setShowPreview(false);
    } else {
      alert('Please select a PDF file.');
    }
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setShowPreview(true);
  };

  return (
    <div className="upload-container">
      <div className="upload-box">
        <input type="file" id="file-upload" accept=".pdf" onChange={onFileChange} style={{ display: 'none' }} />
        {!file && (
          <label htmlFor="file-upload" className="upload-label">
            <p>Drag & drop your PDF here, or click to select a file.</p>
          </label>
        )}
        {loading && (
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        )}
        {file && showPreview && (
          <div className="pdf-preview">
            <Document
              file={file}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={(error) => {
                console.error('Error while loading document:', error);
                setLoading(false);
                alert('Error loading PDF file.');
              }}
            >
              <Page pageNumber={1} width={400} />
            </Document>
            <p>Page 1 of {numPages}</p>
          </div>
        )}
      </div>
      <button className="upload-button" onClick={() => window.location.href = '#'} disabled={!file || progress < 100}>
        Upload PDF
      </button>
    </div>
  );
};

export default Upload;
