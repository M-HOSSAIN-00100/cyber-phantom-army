async function sendMessage() {
  let input = document.getElementById('userInput').value;
  let log = document.getElementById('chatLog');

  log.innerHTML += `<p>👤 You: ${input}</p>`;
  document.getElementById('userInput').value = '';

  const response = await fetch("https://chatbot-backend-1-5h3w.onrender.com/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt: input }) // এখানে 'prompt' পাঠাচ্ছি
  });

  const data = await response.json();
  log.innerHTML += `<p>🤖 CYBER BOT: ${data.reply}</p>`;
}
