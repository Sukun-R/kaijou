function calculation() {
    value = parseInt(document.getElementById('value').value)
    answer = document.getElementById('answer')
    if (isNaN(value)) {
        answer.value = "文字式は計算できません｡";
    } else {
        answer.value = kaijou(value);
    }
}

function kaijou(number) {
    let list = [];
    let answer = 1;
    for (let i = number; i >= 1; i--) {
        list.push(i);
    }
    for (let x = 0; x <= list.length - 1; x++) {
        answer = answer * list[x];
    }
    return answer;
}
