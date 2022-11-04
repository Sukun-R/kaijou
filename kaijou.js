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
    let answer = 1;
    for (let i = number; i >= 1; i--) {
        answer = answer * i;
        if (answer === Infinity) {
            answer = '上限';
            break;
        }
    }
    return answer;
}
