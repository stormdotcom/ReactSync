// CollaborativeEditor.js
import React, { useState } from "react";

function CollaborativeEditor({ document, onEdit }) {
  const [content, setContent] = useState(document.content);

  const handleEdit = (newContent) => {
    setContent(newContent);
    onEdit({ content: newContent }); // Notify other users about the change
  };

  return (
    <div>
      <textarea value={content} onChange={(e) => handleEdit(e.target.value)} />
    </div>
  );
}

export default CollaborativeEditor;
