const handleUpload = async (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  
  reader.onload = async (e) => {
    const text = e.target.result;
    const response = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, lang: 'spanish' })
    });
    const translated = await response.json();
    setTranslatedText(translated);
  };
  
  reader.readAsText(file);
};