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
        answer = BigInt(answer) * BigInt(i);
        if (answer === Infinity) {
            answer = '上限';
            break;
        }
    }
    return answer;
}

function value_copy() {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(document.getElementById('answer').value);
    }
}
addEventListener('keydown',
    event => {
        if (event.keyCode === 13) {
            calculation();
        }
        if (event.ctrlKey && event.keyCode === 67) {
            value_copy();
        }
    })
