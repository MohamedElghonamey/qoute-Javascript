
var Qoutes = [

    {
        qoute: " “Be yourself; everyone else is already taken.” ",

        author: " ― Oscar Wilde  "
    },

    {
        qoute: " “A room without books is like a body without a soul.”  ",
        author: " ― Marcus Tullius Cicero",
    },
    {
        qoute: " “You only live once, but if you do it right, once is enough.”",
        author: "― Mae West",
    },
    {
        qoute: " “In three words I can sum up everything I've learned about life: it goes on.” ",
        author: "― Robert Frost",
    },
    {
        qoute: " “A friend is someone who knows all about you and still loves you.”",
        author: "― Elbert Hubbard"
    }

];

var qoute = document.querySelector(".qoute");
var author = document.querySelector(".author");


function myQoutes() {
    var myQoutes = Math.floor(Math.random() * Qoutes.length);
    qoute.innerHTML = Qoutes[myQoutes].qoute;
    author.innerHTML = Qoutes[myQoutes].author;
}

