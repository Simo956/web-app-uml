import React, { useEffect, useState } from 'react';

const NodeDetails = ({ node, onUpdateNode }) => {
  const [attribute, setAttribute] = useState(null);
  const [method, setMethod] = useState(null);

  const handleAddAttribute = () => {
    const updatedNode = {
      ...node,
      data: {
        ...node.data,
        attributes: [...node.data.attributes, attribute],
      },
    };
    onUpdateNode(updatedNode);
    setAttribute(null);
  };

  const handleAddMethod = () => {
    const updatedNode = {
      ...node,
      data: {
        ...node.data,
        methods: [...node.data.methods, method],
      },
    };
    onUpdateNode(updatedNode);
    setMethod(null);
  };

  const [attributeDis, setAttributeDis] = useState(true);
  const [methodDis, setMethodDis] = useState(true);

  useEffect(()=>{
    if(attribute !== null){
        setAttributeDis(false)
    }
    if(method !== null){
        setMethodDis(false)
    }
  }, [attribute, method])


  return (
    <div className="node-details">
      <h3>Node Details</h3>
      <h4>Attributes</h4>
      <ul>
        {node.data.attributes.map((attr, index) => (
          <li key={index}>{attr}</li>
        ))}
      </ul>
      <div className='box'>
        <input 
            type="text" 
            value={attribute} 
            onChange={(e) => setAttribute(e.target.value)} 
            placeholder="Add attribute" 
            />
        <button onClick={handleAddAttribute} disabled={attributeDis}>Add Attribute</button>
        </div>

      <h4>Methods</h4>
      <ul>
        {node.data.methods.map((mthd, index) => (
          <li key={index}>{mthd}</li>
        ))}
      </ul>
      <input 
        type="text" 
        value={method} 
        onChange={(e) => setMethod(e.target.value)} 
        placeholder="Add method" 
      />
      <button onClick={handleAddMethod} disabled={methodDis}>Add Method</button>
    </div>
  );
};

export default NodeDetails;
