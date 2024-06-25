const p1 = document.querySelector('.pergunta1');
const p2 = document.querySelector('.pergunta2');
const p3 = document.querySelector('.pergunta3');
const r1 = document.querySelector('.resposta1');
const r2 = document.querySelector('.resposta2');
const r3 = document.querySelector('.resposta3');

const clickPergunta = (e) => {
    const target = e.target.closest('div');
    if (!target) return;
    if(target.classList.contains('pergunta1')){
        r1.classList.remove('hiddenResp');
        r2.classList.add('hiddenResp');
        r3.classList.add('hiddenResp');
    }
    if(target.classList.contains('pergunta2')){
        r2.classList.remove('hiddenResp');
        r1.classList.add('hiddenResp');
        r3.classList.add('hiddenResp');
    }
    if(target.classList.contains('pergunta3')){
        r3.classList.remove('hiddenResp');
        r2.classList.add('hiddenResp');
        r1.classList.add('hiddenResp');
    }
}

p1.addEventListener('click', clickPergunta);
p2.addEventListener('click', clickPergunta);
p3.addEventListener('click', clickPergunta);