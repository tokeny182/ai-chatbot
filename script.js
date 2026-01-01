// Add a message to the chatbox
function addMessage(sender, text) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Handle sending a message
function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage("You", text);
  input.value = "";

  // Fake AI response
  setTimeout(() => {
    const reply = generateAIResponse(text);
    addMessage("Bot", reply);
  }, 500);
}

// Simple fake AI logic
function generateAIResponse(userText) {
  // You can customize this however you want
  return "I'm a simple AI chatbot! You said: " + userText;
}
