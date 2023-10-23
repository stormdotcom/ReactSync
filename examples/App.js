// App.js (in your example application)
import React from "react";
import CollaborativeEditor from "ReactSync/components/CollaborativeEditor";

function App() {
  const document = {
    content: "Welcome to ReactSync! Start collaborating here.",
    id: "document-1",
  };

  const handleEdit = (newContent) => {
    // Handle the edit and send updates to other users
  };

  return (
    <div>
      <h1>Collaborative Document</h1>
      <CollaborativeEditor document={document} onEdit={handleEdit} />
    </div>
  );
}

export default App;
