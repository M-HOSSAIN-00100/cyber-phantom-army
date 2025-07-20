async function sendMessage() {
  let input = document.getElementById('userInput').value;
  let log = document.getElementById('chatLog');

  log.innerHTML += `<p>👤 You: ${input}</p>`;
  document.getElementById('userInput').value = '';

  try {
    const response = await fetch("https://chatbot-backend-1-5h3w.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input })
    });

    const data = await response.json();
    if (data.response) {
      log.innerHTML += `<p>🤖 CYBER BOT: ${data.response}</p>`;
    } else if (data.error) {
      log.innerHTML += `<p>❌ Error: ${data.error}</p>`;
    } else {
      log.innerHTML += `<p>⚠️ Unexpected response: ${JSON.stringify(data)}</p>`;
    }

  } catch (error) {
    log.innerHTML += `<p>🚫 Network error: ${error.message}</p>`;
  }
}
