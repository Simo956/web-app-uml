// src/Components/Diagram.js
import React from 'react';
import ReactFlow, { MiniMap, Controls, Background, applyNodeChanges } from 'react-flow-renderer';

const Diagram = ({ nodes, setNodes, setSelectedNodeId }) => {
  const onNodeClick = (event, node) => {
    setSelectedNodeId(node.id);
  };

  const onNodesChange = (changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  };

  return (
    <div className="diagram">
      <ReactFlow
        nodes={nodes.map((node) => ({
          ...node,
          data: {
            ...node.data,
            label: (
              <div>
                <strong>{node.data.label}</strong>
                <hr />
                <div>
                  <em>Attributes:</em>
                  <ul>
                    {node.data.attributes.map((attr, index) => (
                      <li key={index}>{attr}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <em>Methods:</em>
                  <ul>
                    {node.data.methods.map((mthd, index) => (
                      <li key={index}>{mthd}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ),
          },
        }))}
        onNodesChange={onNodesChange}   
        onNodeClick={onNodeClick}
        style={{ width: '100%', height: '100%' }}
        fitView    // Ensures nodes fit within the viewable area
      >
        <MiniMap />
        <Controls />
        <Background color="#aaa" gap={16} />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
