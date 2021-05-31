// Import the encryptors functions here.
const encryptors = require("./encryptors");

const caesarCipher = encryptors.caesarCipher;
const reverseCipher = encryptors.reverseCipher;
const symbolCipher = encryptors.symbolCipher;

const encodeMessage = (str) => {
  // Use the encryptor functions here.
  return symbolCipher(reverseCipher(caesarCipher(str, 5)));
};

const decodeMessage = (str) => {
  return caesarCipher(reverseCipher(symbolCipher(str)), -5);
};

// User input / output.

const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;
  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  }
  if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  }

  process.stdout.write(output + "\n");
  process.exit();
};

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ");
process.stdin.on("data", handleInput);
