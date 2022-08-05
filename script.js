function repeatImage() {
    let x;
    do
        x = prompt('how many times should we display our image? (1-10 times)');
    while (!((x >= 1) && (x <=10)))
    x = Math.floor(x);
    //console.log(x);
    images = document.getElementById("images");
    for (let i = 0; i < x; i++) {
        images.innerHTML += ("<div><img src='./images/food.jpeg' alt='delicious foods' width='400px'>" + (i+1) + "</div>");
        //console.log('adding image ' + (i+1));
    }
}

function colorScript() {
    let x = prompt('Provide a hexadecimal color value, please \( ex. e044bb). Or leave it blank for a random color!')
    if (x === '') {
        const a = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const c = Math.floor(Math.random()*256);
        const bg = 'rgb(' + a + ',' + b + ',' + c + ')';
        console.log(bg);
        document.body.style.backgroundColor = bg;
    } else if (x.length = 6) {
        const dict = '0123456789abcdefABCDEF'
        let valid = true;
        for (let i = 0; i < 6; i++) {
            if (!dict.includes(x[i])) {
                valid = false;
            }
        }
        if (!valid) {
            alert('not a valid hex color value');
            colorScript();
        } else {
            document.body.style.backgroundColor = '#' + x;
        }
    }
}

function greet() {
    const x = document.getElementById('greeting').value;
    document.getElementById('response').innerHTML = 'Hi, ' + x + '!';
}

function powers() {
    let x = document.getElementById('arg1').value;
    let y = document.getElementById('arg2').value;
    const a = Number(x);
    const b = Number(y);
    console.log(Number(x), Number(y));
    if (isNaN(a) || isNaN(b) || x === '' || y === '') {
        alert('Invalid inputs. Please enter numbers only!')
    } else {
        const z = Math.pow(x,y)
        const ans = x + ' to the ' + y + ' power = ' + z;
        document.getElementById('answer').innerHTML = ans;
        document.getElementById('arg1').value = '';
        document.getElementById('arg2').value = '';
    }
}