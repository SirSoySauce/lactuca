const consoleContent = document.getElementById('console-content');
const dynamicConsoleNative = document.getElementById('dynamic-console')

const Typer = {
    text: '',
    accessCountimer: null,
    index: 0,
    speed: 3,
    init: function () {
        this.accessCountimer = setInterval(function () {
            Typer.updLstChr();
        }, 500);
        Typer.text = consoleContent.innerHTML;
        Typer.text = Typer.text.slice(0, Typer.text.length - 1).trim();
    },

    content: function () {
        return dynamicConsoleNative.innerHTML;
    },

    append: function (str) {
        dynamicConsoleNative.innerHTML += str;
        return false;
    },

    write: function (str) {
        dynamicConsoleNative.innerHTML = str;
        return false;
    },


    addText: function () {
        const cont = Typer.content();
        if (cont.substring(cont.length - 1, cont.length) === '|') {
            this.write(this.content().substring(0, cont.length - 1));
        }

        Typer.index += Typer.speed;
        const text = Typer.text.substring(0, Typer.index);

        this.write(text)
        window.scrollBy(0, 50);
    },

    updLstChr: function () {
        const cont = this.content();

        if (cont.substring(cont.length - 1, cont.length) === '|') {
            this.write(this.content().substring(0, cont.length - 1));
        } else {
            this.append('|');
        }
    },
};
Typer.init();

const timer = setInterval('t();', 30);

function t() {
    Typer.addText();

    if (Typer.index > Typer.text.length) {
        clearInterval(timer);
    }
}
