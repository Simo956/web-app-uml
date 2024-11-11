// src/App.js
import React, { useState } from 'react';
import Diagram from './Components/Diagram';
import Sidebar from './Components/Sidebar';
import NodeDetails from './Components/Elements/NodeDetails';
import './App.css';

function App() {
  const [nodes, setNodes] = useState([]);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const handleAddElement = (type) => {
    const newNode = {
      id: `node-${nodes.length + 1}`,
      type: 'default',
      position: { x: Math.random() * 250, y: Math.random() * 250 },
      data: { 
        label: `${type.charAt(0).toUpperCase() + type.slice(1)} Diagram`,
        attributes: [],  // Initialize empty arrays for attributes
        methods: [],     // and methods
      },
    };
    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  const handleDelete = () => {
    if (selectedNodeId) {
      setNodes((prevNodes) => prevNodes.filter(node => node.id !== selectedNodeId));
      setSelectedNodeId(null);
    }
  };

  const onUpdateNode = (updatedNode) => {
    setNodes((prevNodes) =>
      prevNodes.map((node) => (node.id === updatedNode.id ? updatedNode : node))
    );
  };

  const selectedNode = nodes.find((node) => node.id === selectedNodeId);

  return (
    <div className="App">
      <h1>StarUML Clone</h1>
      <div className="container">
        <Sidebar onAddElement={handleAddElement} handleDelete={handleDelete} selectedNodeId={selectedNodeId} />
        <Diagram nodes={nodes} setNodes={setNodes} setSelectedNodeId={setSelectedNodeId} />
        {selectedNode && <NodeDetails node={selectedNode} onUpdateNode={onUpdateNode} />}
      </div>
    </div>
  );
}

export default App;
