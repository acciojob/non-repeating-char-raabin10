function firstNonRepeatedChar(str) {
  // Create an object to store the character counts'[] 
  let charCount = {}; 
  
  // Iterate through the string and count the occurrences of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i]; 
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the string again to find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charCount[char] === 1) {
      return char; // Found the first non-repeated character
    }
  }

  return null; // If no non-repeated character is found
}

const input = prompt("Enter a string");
const result = firstNonRepeatedChar(input);

if (result !== null) {
  alert(result);
} else {
  alert("null");
}
cy.visit(baseUrl, {
  onBeforeLoad(win) {
    // Stub your function to simulate input with no non-repeated characters
    cy.stub(win, "prompt").onFirstCall().returns('aabbcc');
  }
});

cy.on("window:alert", result => {
  // Assert that the result matches the expected behavior when there are no non-repeated characters
  expect(result).to.equal(null);
});
