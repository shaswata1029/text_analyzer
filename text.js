console.log("text analyzer program");
let btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {

    let text = document.getElementById('text').value;
    let special = 0,
        space = 0,
        n = 0,
        total = 0,
        uc = 0,
        lc = 0,
        sentences = 0,
        special_dot = 0;
    words = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] == ' ') {
            space++;
            if (i != 0 && text[i - 1] != '.')
                words++;

            while (i < text.length && text[i + 1] == ' ')
                i++;
        } else if (text[i] >= '0' && text[i] <= '9')
            n++;
        else if (text[i] >= 'A' && text[i] <= 'Z')
            uc++;
        else if (text[i] >= 'a' && text[i] <= 'z')
            lc++;
        else if (text[i] == '.') {
            special_dot++
            words++;
            sentences++;
        } else if (text[i] == '\n') {
            if (i != 0 && text[i - 1] != '\n' && text[i - 1] != '.' && text[i - 1] != ' ')
                words++;
        } else
            special++;
    }

    if (text[text.length - 1] != '.')
        sentences++;

    if (text[text.length - 1] != '.' && text[text.length - 1] != ' ' && text[text.length - 1] != '\n')
        words++;

    if (sentences > words)
        sentences = words;


    total = uc + lc + special + n + space + special_dot;

    let result = document.getElementById('result');
    let div3 = document.getElementById('div3');
    div3.hidden = false;
    if (text.length == 0) {
        result.innerText = "No characters are written. Please enter atleast one character.";
    } else {
        let string1 = "Out of " + total + " characters there are-"
        let string2 = "1.Upper Case Letters : " + uc;
        let string3 = "2.Smaller Case Letters : " + lc;
        let string4 = "3.Numbers : " + n;
        let string5 = "4.Whitespaces : " + space;
        let string6 = "6.Special Characters : " + special;
        let string7 = "7.Words : " + words;
        let string8 = "8.Sentences : " + sentences;
        let string = string1 + "\n" + string2 + "\n" + string3 + "\n" + string4 + "\n" + string5 + "\n" + string6 + "\n" + string7 + "\n" + string8;
        result.innerText = string;
    }



})

let clr = document.getElementById('clr');
clr.addEventListener('click', function(e) {

    let text = document.getElementById('text');
    text.value = "";
    let div3 = document.getElementById('div3');
    div3.hidden = true;

})