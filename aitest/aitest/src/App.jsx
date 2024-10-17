import React, { useState } from 'react';

const App = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleGenerateImage = () => {
    // Construct the image URL using the Pollinations API
    const formattedPrompt = encodeURIComponent(prompt);
    const url = `https://image.pollinations.ai/prompt/${formattedPrompt}`;
    setImageUrl(url);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGenerateImage(); // Trigger the image generation on Enter key press
    }
  };

  return (
    <section className='section-center'>
      <h1>Image Generator</h1>
      <input
        className='input-field'
        type="text"
        onKeyDown={handleKeyPress}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here..."
        style={{ width: '300px', padding: '10px', marginBottom: '10px' }}
      />
      <button className="glow-on-hover" onClick={handleGenerateImage} style={{ padding: '10px 20px' }}>
        Generate
      </button>

      {imageUrl && (
        <div>
          {/* <h2>Generated Image:</h2> */}
          <img src={imageUrl} alt="Generated" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
    </section>
  );
};

export default App;
