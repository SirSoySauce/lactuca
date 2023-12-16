function getConsoleContent() {
    return console.innerHTML;
}

function appendToConsoleContent(str) {
    console.innerHTML += str;
}

function setConsoleContent(str) {
    console.innerHTML = str;
}

function lastCharacterIsCursor(consoleContent) {
    return consoleContent.slice(-1) === '|';
}

function removeLastCharacter(consoleContent) {
    setConsoleContent(consoleContent.slice(0, -1));
}

function addNextCharacter() {
    index += SPEED;
    setConsoleContent(text.slice(0, index));
    window.scrollBy(0, 50);
}

function toggleCursor() {
    const consoleContent = getConsoleContent();
    if (lastCharacterIsCursor(consoleContent)) {
        removeLastCharacter(consoleContent);
    } else {
        appendToConsoleContent(CURSOR);
    }
}

const CURSOR = '|';
const SPEED = 3;

const console = document.getElementById('dynamic-console');
const text = document.getElementById('console-content').innerHTML.trim();

let index = 0;

const typer = setInterval(() => {
    addNextCharacter();
    if (index > text.length) {
        clearInterval(typer);
    }
}, 30);
setInterval(() => toggleCursor(), 500);