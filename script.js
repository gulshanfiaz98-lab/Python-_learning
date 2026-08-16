const chat = document.getElementById("chat");

const input = document.getElementById("messageInput");

const sendButton = document.getElementById("sendButton");

const clearButton = document.getElementById("clearButton");

const typing = document.getElementById("typing");


function addMessage(text, type) {

    const message = document.createElement("div");

    message.classList.add("message", type);

    message.textContent = text;

    chat.appendChild(message);

    chat.scrollTop = chat.scrollHeight;
}


function sendMessage() {

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    const welcome = document.querySelector(".welcome");

    if (welcome) {
        welcome.remove();
    }

    addMessage(text, "user");

    input.value = "";

    generateResponse(text);
}


function generateResponse(text) {

    typing.style.display = "block";

    setTimeout(() => {

        typing.style.display = "none";

        let response =
            "I'm still being built! 🤖 Soon I'll be connected to real AI.";

        const message = text.toLowerCase();

        if (message.includes("hello") ||
            message.includes("hi")) {

            response =
                "Hey! 👋 It's great to meet you!";

        }

        else if (message.includes("name")) {

            response =
                "I'm Nova ✦ Your friendly AI companion.";

        }

        else if (message.includes("how are you")) {

            response =
                "I'm doing great! Thanks for asking. 😊";

        }

        else if (message.includes("thank")) {

            response =
                "You're very welcome! 💜";

        }

        addMessage(response, "bot");

    }, 900);
}


function clearChat() {

    chat.innerHTML = "";

    addMessage(
        "Chat cleared! ✨ What would you like to talk about?",
        "bot"
    );
}


sendButton.addEventListener(
    "click",
    sendMessage
);


input.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            sendMessage();

        }

    }
);


clearButton.addEventListener(
    "click",
    clearChat
);
