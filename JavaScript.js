function checkPalindrome() {
    const userInput = document.getElementById("userInput").value;
    const cleanedInput = userInput.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alpanumeric characters
    const reversedInput = cleanedInput.split('').reverse().join('');

    if (cleanedInput === reversedInput) {
        document.getElementById("result").textContent = '"${userInput}" is a palindrome!';
    } else {
        document.getElementById("").textContent
    
= '"${userInput}" is not a palindrome.';

    }
}