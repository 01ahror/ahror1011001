document.getElementById("sendButton").addEventListener("click", function() {
    const userInput = document.getElementById("userInput").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, "user-message");
        document.getElementById("userInput").value = ""; 
        setTimeout(() => {
            getBotResponse(userInput);
        }, 500);
    }
});

function addMessage(message, type) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", type);
    messageDiv.textContent = message;
    document.getElementById("chatbox").appendChild(messageDiv);
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight; 
}

function getBotResponse(userInput) {
    let botResponse = "Kechirasiz, men buni tushunmadim.";
    
    // Savolga mos javoblar
    if (userInput.toLowerCase().includes("salom")) {
        botResponse = "Salom! Qanday yordam bera olishim mumkin?";
    } else if (userInput.toLowerCase().includes("yordam")) {
        botResponse = "Sizga qanday yordam kerak? Matematikadan yoki so'zlashuvdan yordam bera olishim mumkin.";
    } else if (userInput.toLowerCase().includes("ismingiz nima")) {
        botResponse = "Men sun'iy intellektman. Sizga yordam berish uchun shu yerda turibman.";
    } else if (userInput.toLowerCase().includes("seni kim yaratkan")) {
        botResponse = "Ahror Omonilloxojayev";
    } else if (userInput.toLowerCase().includes("yoshimni bilasizmi")) {
        botResponse = "Afsuski, sizning yoshingizni bilmayman. Ammo, menga o'zingiz haqida ma'lumot bera olasiz.";
    } else if (userInput.toLowerCase().includes("ismim")) {
        botResponse = "Ismingizni aytsangiz, men sizni yanada yaxshiroq tanishaman!";
    }
    
    // Matematika hisoblash
    if (/(\d+)\s*[\+\-\*\/]\s*(\d+)/.test(userInput)) {
        const match = userInput.match(/(\d+)\s*([\+\-\*\/])\s*(\d+)/);
        const num1 = parseFloat(match[1]);
        const operator = match[2];
        const num2 = parseFloat(match[3]);
        
        let result;
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                result = "Xatolik!";
        }
        botResponse = `Natija: ${result}`;
    }

    addMessage(botResponse, "bot-message");
}
