// Add a message to the chatbox
function addMessage(sender, text) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Add a temporary "typing..." message
function showTyping() {
  const chatbox = document.getElementById("chatbox");
  const typing = document.createElement("p");
  typing.id = "typingIndicator";
  typing.innerHTML = `<strong>Bot:</strong> <em>typing...</em>`;
  chatbox.appendChild(typing);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Remove the typing message
function hideTyping() {
  const typing = document.getElementById("typingIndicator");
  if (typing) typing.remove();
}

// Handle sending a message
function sendMessage() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage("You", text);
  input.value = "";

  // Show typing animation
  showTyping();

  // Fake AI response
  setTimeout(() => {
    hideTyping();
    const reply = generateAIResponse(text);
    addMessage("Bot", reply);
  }, 1200); // delay for animation
}

// Simple fake AI logic
function generateAIResponse(userText) {
  return "I'm a simple AI chatbot! You said: " + userText;
}
