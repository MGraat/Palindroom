function isPalindroom() {
 
    const invoer = document.getElementById('invoer').value;
    const message = document.getElementById('message');
    const node = document.createElement("LI");

    const removeCharacters = invoer.replace(/[^A-Z0-9]/ig, "").toLowerCase();
    const reverseInvoer = removeCharacters.split('').reverse().join('');
    
        if(removeCharacters === reverseInvoer) {
            const guess = document.createTextNode(String(invoer) + " is a Palindrome!");
            node.appendChild(guess);
            document.getElementById('list').appendChild(node);
        }
        else {
            const guess = document.createTextNode(String(invoer) + " is not a Palindrome!");
            node.appendChild(guess);
            document.getElementById('list').appendChild(node);
        }
 
}
const button = document.getElementById('check-button');
    button.onclick = isPalindroom;
