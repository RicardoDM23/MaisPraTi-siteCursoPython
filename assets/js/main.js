/* pqPython inicio */
const modal = document.querySelector(".pqPythonDialog")

function abrirDialog(){
    modal.showModal()
}

function fecharDiaglog(){
    modal.close()
}
/* pqPython fim */

/* inscrevase inicio */
const modal2 = document.querySelector(".inscDialog")

function openInscModal(){
    document.getElementById('inscDialogForm').reset();
    document.getElementById('inscDialogErrorM').textContent = '';
    modal2.showModal()
}

function closeInscModal(){
    document.getElementById('inscDialogForm').reset();
    document.getElementById('inscDialogErrorM').textContent = '';
    modal2.close()
}
/* inscrevase fim */

/* toTop inicio */
function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
/* toTop fim */