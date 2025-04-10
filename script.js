// ✅ FUNCTION CHALLENGES – Practice Pack

// 1. capitalize(word)
// Capitalizes the first letter of a word
// Example: "hello" → "Hello"

function capitalize(word) {
    // Your code here
    return word.charAt(0).toUpperCase() + word.slice(1)  
  }
  
  // 2. isEmailValid(email)
  // Returns true if email includes "@" AND ends with ".com"
  // Example: "user@email.com" → true, "user@gmail.org" → false
  
  function isEmailValid(email) {
    // Your code here
    return email.includes("@") && email.endsWith(".com");
  }
  
  // 3. getInitials(name)
  // Returns the initials of the name passed
  // "Matt Claustre" → "M.C."
  // "jas" → "J."
  

    // Your code here
    function getInitials(name) {
        let nameParts = name.split(" ");
        let firstInitial = nameParts[0].charAt(0).toUpperCase();
      
        if (nameParts.length === 1) {
          return firstInitial + ".";
        } else {
          let secondInitial = nameParts[1].charAt(0).toUpperCase();
          return firstInitial + "." + secondInitial + ".";
        }
      }
      

  
  // ✅ Test them below:
  console.log(capitalize("hello"));       // → "Hello"
  console.log(isEmailValid("test@gmail.com")); // → true
  console.log(getInitials("Matt"));   // → "M.C."
  