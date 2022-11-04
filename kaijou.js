function calculation() {
    value = document.getElementById('value').value
    document.getElementById('answer').value = kaijou(value);
}

function kaijou(number) {
    let list = [];
    let answer = 1;
    for (let i = number; i >= 1; i--) {
        list.push(i);
    }
    list.reverse();
    for (let x = list.length; x >= 1; x--) {
        answer = answer * list[x - 1];
    }
    return answer;
}
/*明日用 margin: 0px 30px ;*/