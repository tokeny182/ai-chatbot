// Add a message to the chatbox
function addMessage(sender, text) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Create the bouncing dots typing indicator
function showTyping() {
  const chatbox = document.getElementById("chatbox");

  const typing = document.createElement("div");
  typing.id = "typingIndicator";
  typing.innerHTML = `
    <strong>Bot:</strong>
    <span class="dots">
      <span class="dot"></span>
      <span class="dot"></span>
      <span class="dot"></span>
    </span>
  `;

  chatbox.appendChild(typing);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Remove typing indicator
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

  showTyping();

  setTimeout(() => {
    hideTyping();
    const reply = generateAIResponse(text);
    addMessage("Bot", reply);
  }, 1500);
}

// Fake AI logic
function generateAIResponse(userText) {
  return "I'm a simple AI chatbot! You said: " + userText;
}
