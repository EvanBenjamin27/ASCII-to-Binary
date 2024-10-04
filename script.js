function convertToBinary() {
    const inputText = document.getElementById("inputText").value;
    let binaryOutput = "";

    for (let i = 0; i < inputText.length; i++) {
        const charCode = inputText.charCodeAt(i);
        const binary = charCode.toString(2).padStart(8, '0');
        binaryOutput += binary + " ";
    }

    document.getElementById("binaryOutput").textContent = binaryOutput;
}