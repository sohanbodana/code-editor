import React, { useState } from 'react';
import { Highlight } from 'prism-react-renderer';
import { themes } from 'prism-react-renderer';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  return (
    <div style={{ margin: '20px' }} >


      <textarea
        value={code}
        onChange={(event) => setCode(event.target.value)}
        style={{
          fontSize: '16px',
          fontFamily: 'Consolas, monospace',
          width: '100%',
          height: '300px',
          background: '#f5f2f0',
          border: '1px solid #ccc',
          borderRadius: '5px',
          padding: '10px',
          boxSizing: 'border-box',
        }}
      />

      ⬇️
      <div style={{ marginTop: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>

        <Highlight theme={themes.github} code={code.trim()} language="jsx">
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={{ ...style, padding: '10px', overflowX: 'auto', fontFamily: 'Consolas, monospace' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>

      </div>
    </div>
  );
};

export default CodeEditor;
