import React from 'react';

interface FilePreviewProps {
  file: File;
  onRemove?: () => void;
}

const FilePreview: React.FC<FilePreviewProps> = ({ file, onRemove }) => {
  const isImage = file.type.startsWith('image/');

  return (
    <div className="file-preview">
      {isImage ? (
        <img
          src={URL.createObjectURL(file)}
          alt={file.name}
          className="preview-image"
        />
      ) : (
        <div className="file-info">
          <span className="file-name">{file.name}</span>
          <span className="file-size">({(file.size / 1024).toFixed(2)} KB)</span>
        </div>
      )}
      {onRemove && (
        <button onClick={onRemove} className="remove-button">
          Remove
        </button>
      )}
    </div>
  );
};

export default FilePreview;
