const staticConsoleContent = document.getElementById('console-content').innerHTML;
const console = document.getElementById('dynamic-console');

function getDynamicConsoleContent() {
    return console.innerHTML;
}

function appendToConsoleContent(str) {
    console.innerHTML += str;
}

function setConsoleContent(str) {
    console.innerHTML = str;
}

function lastCharacterIsCursor(consoleContent) {
    return consoleContent.substring(consoleContent.length - 1, consoleContent.length) === '|';
}

function removeLastCharacter(consoleContent) {
    setConsoleContent(consoleContent.substring(0, consoleContent.length - 1));
}

function addNextCharacter() {
    index += speed;
    setConsoleContent(text.substring(0, index));
}

function updateLastCharacter() {
    const consoleContent = getDynamicConsoleContent();
    if (lastCharacterIsCursor(consoleContent)) {
        removeLastCharacter(consoleContent);
    } else {
        appendToConsoleContent('|');
    }
}

let index = 0;
const speed = 3;
const text = staticConsoleContent.slice(0, staticConsoleContent.length - 1).trim();

const timer = setInterval(() => {
    addNextCharacter();
    if (index > text.length) {
        clearInterval(timer);
    }
}, 30);
setInterval(() => updateLastCharacter(), 500);