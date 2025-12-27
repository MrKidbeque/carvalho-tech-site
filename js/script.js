    const btnMenu = document.getElementById('btnMenu');
    const menu = document.getElementById('menuOpcoes');

    btnMenu.addEventListener('click', () => {
        menu.classList.toggle('ativo');
    });