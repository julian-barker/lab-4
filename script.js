function colorScript() {
    let x = prompt('Provide a hexadecimal color value, please \( ex. e044bb). Or type in random for a random color!',)
    if (x == 'random') {
        const a = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const c = Math.floor(Math.random()*256);
        const bg = 'rgb(' + a + ',' + b + ',' + c + ')';
        console.log(bg);
        document.body.style.backgroundColor = bg;
    } else {
        document.body.style.backgroundColor = '#' + x;
    }
}

function greet() {
    const x = document.getElementById('greeting').value;
    document.getElementById('response').innerHTML = 'Hi, ' + x + '!';
}

function powers() {
    let x = document.getElementById('arg1').value;
    let y = document.getElementById('arg2').value;
    if (x === '') {
        x = 0;
    }
    if (y === '') {
        y = 0;
    }
    const z = Math.pow(x,y)
    const ans = x + ' to the ' + y + ' power = ' + z;
    document.getElementById('answer').innerHTML = ans;
    document.getElementById('arg1').value = '';
    document.getElementById('arg2').value = '';
}