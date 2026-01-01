// Play a sound when the bot sends a message
const botSound = new Audio("bot-sound.mp3"); // put this file in the same folder

// Add a message instantly (used for user messages)
function addMessage(sender, text) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("p");
  msg.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Add a message letter-by-letter (for bot)
function typeMessage(sender, text) {
  const chatbox = document.getElementById("chatbox");
  const msg = document.createElement("p");
  chatbox.appendChild(msg);

  let i = 0;
  botSound.play(); // play sound once when typing starts

  function type() {
    msg.innerHTML = `<strong>${sender}:</strong> ${text.slice(0, i)}`;
    chatbox.scrollTop = chatbox.scrollHeight;

    if (i < text.length) {
      i++;
      setTimeout(type, 30); // typing speed
    }
  }

  type();
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
    typeMessage("Bot", reply);
  }, 1500);
}

// Fake AI logic
function generateAIResponse(userText) {
  return "I'm typing this letter by letter! You said: " + userText;
}
