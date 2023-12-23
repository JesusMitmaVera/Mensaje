const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    Swal.fire({
        html: '<img src="https://i.gifer.com/embedded/download/W3oQ.gif" style="max-width:100%; height:auto;">' +
              '<p>Cree en ti ¡carajo!, cree en ti tarado, dale, dale, dale.<br>P.D.: Sabía que marcarías Motivado(a), es genial :D</p>',
        showConfirmButton: false,
        showCloseButton: true,
        closeButtonHtml: '&times;',
        background: '#aac9fa',
    });
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    noBtn.style.setProperty('top', randomY + '%');
    noBtn.style.setProperty('left', randomX + '%');
    noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
});
