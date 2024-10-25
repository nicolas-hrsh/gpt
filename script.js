function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const outputField = document.getElementById('output');

    if (userInput.trim() === "") {
        alert("Please enter a message.");
        return;
    }

    // Simulated response
    outputField.value = "You: " + userInput + "\nChatGPT: This is a simulated response.";

    // Clear the input field
    document.getElementById('userInput').value = "";
}
