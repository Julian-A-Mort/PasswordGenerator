
  // Get references to the elements I want to manipulate on the page
  const generateBtn = document.getElementById("generate");
  const passwordTextArea = document.getElementById("password");
  const messageArea = document.getElementById("messageArea");


  // Create a function to generate a random a particular password
  function generatePassword(length, specialChars) {
      // Define character the allowed charachters (is there a shorter way to write?)
      var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
      var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var numericChars = "0123456789";
      var specialChars = "!@#$%^&*()_+{}[]|:;<>,.?/";

      // define initial charachter set
      let characters = lowercaseChars + uppercaseChars + numericChars;

      // line to add special charachters to characters if included as true
      if (specialChars) {
          characters += specialChars;
      }

      // Generate a password of the specified length
      let newPassword = "";
      for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          newPassword += characters.charAt(randomIndex);
      }

      return newPassword;
  }

  // Event listener for the "Generate Password" button click. So the prompts to appear basically
  generateBtn.addEventListener("click", function () {
      // Prompt the user for the desired password length. Includes a prompt and a set of conditions to meet to end the loop
      let passwordLength;
      do {
          passwordLength = parseInt(prompt("Choose a password length of between 8 and 128 characters... please:"));
      } while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

      // Prompt the user to include or not special characters
      var specialChars = confirm("Include some lovely special characters in the password?");

      // And then generate a lovely password
      var newPassword = generatePassword(passwordLength, specialChars);
      passwordTextArea.value = newPassword;
  });
