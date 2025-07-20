async function sendMessage() {
  let input = document.getElementById('userInput').value;
  let log = document.getElementById('chatLog');

  log.innerHTML += `<p>👤 You: ${input}</p>`;
  document.getElementById('userInput').value = '';

  const response = await fetch("https://cyber-phantom-backend.onrender.com/api", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input })
  });

  const data = await response.json();
  log.innerHTML += `<p>🤖 CYBER BOT: ${data.reply}</p>`;
}
