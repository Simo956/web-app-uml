// src/Sidebar.js
import React from 'react';

const Sidebar = ({ onAddElement, handleDelete, selectedNodeId }) => {
  return (
    <aside className="sidebar">
      <h3>Elements</h3>
      <div className="uml-element" onClick={() => { 
        console.log("Class clicked");
        onAddElement('class'); 
      }}>
        Class
      </div>
      <div className="uml-element" onClick={() => { 
        console.log("Interface clicked");
        onAddElement('interface'); 
      }}>
        Interface
      </div>
      <div className="uml-element" onClick={() => { 
        console.log("Use case clicked");
        onAddElement('use case'); 
      }}>
        Use Case
      </div>
      <button onClick={handleDelete} disabled={!selectedNodeId}>Delete</button> {/* Delete button */}
    </aside>
  );
};

export default Sidebar;
