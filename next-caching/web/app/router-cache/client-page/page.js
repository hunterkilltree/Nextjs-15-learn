// components/TextAnnotator.jsx
'use client';
import { useState } from 'react';

export default function TextAnnotator() {
  const [highlights, setHighlights] = useState([]);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    if (selection && selection.toString().length > 0) {
      setHighlights([...highlights, selection.toString()]);
      selection.removeAllRanges(); // optional: clear selection after highlight
    }
  };

  return (
    <div onMouseUp={handleMouseUp}>
      <p>
        This is a sample paragraph. You can select and highlight text in this section using your mouse.
      </p>
      <h3>Highlights:</h3>
      <ul>
        {highlights.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>
    </div>
  );
}
