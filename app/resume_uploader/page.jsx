"use client";
import { useState } from 'react';

export default function FileUploader() {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleFileInput = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    startProgress();
    setIsVisible(true);
  };

  const startProgress = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      setProgress(currentProgress);
      if (currentProgress >= 100) clearInterval(interval);
    }, 200);
  };

  // Modified remove function
  const handleRemoveFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    
    // Hide progress bar if no files left
    if (newFiles.length === 0) {
      setIsVisible(false);
      setProgress(0); // Reset progress
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Upload Your Resume</h1>

      {/* Styled dropzone area */}
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 hover:border-blue-500 transition-all duration-300 group cursor-pointer">
        <label className="flex flex-col items-center justify-center p-12">
          <div className="mb-6">
            <span className="text-5xl text-gray-400 group-hover:text-blue-500 transition-colors duration-300">
              📁
            </span>
          </div>
          
          <div className="text-center">
            <p className="text-lg font-medium text-gray-700 mb-1">
              Drag & drop files or{' '}
              <span className="text-blue-600 hover:text-blue-700 cursor-pointer">
                browse
              </span>
            </p>
            <p className="text-sm text-gray-500">
              PDF files up to 2MB
            </p>
          </div>
          
          <input
            type="file"
            multiple
            onChange={handleFileInput}
            className="hidden"
            accept=".pdf"
          />
        </label>
      </div>

      {/* Progress bar - now only shows when files exist AND upload is in progress */}
      {isVisible && files.length > 0 && (
        <div className="w-full max-w-2xl mt-8">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-400 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-center text-sm text-gray-600 mt-2">
            Uploading... {progress}%
          </p>
        </div>
      )}

      {/* File list */}
      {files.length > 0 && (
        <div className="w-full max-w-2xl mt-8 space-y-4">
          {files.map((file, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-between"
            >
              <div className="flex items-center space-x-4">
                <span className="text-blue-500">📄</span>
                <div>
                  <p className="font-medium text-gray-700 truncate max-w-xs">
                    {file.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {(file.size / 1024).toFixed(1)} KB
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleRemoveFile(index)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Submit button */}
      {files.length > 0 && (
        <button
          className="mt-8 px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-lg"
          onClick={() => alert('Files submitted successfully!')}
        >
          Submit Documents
        </button>
      )}
    </div>
  );
}