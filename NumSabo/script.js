document.addEventListener('DOMContentLoaded', function() {

    // 1. Inicializar a biblioteca de Animação (AOS)
    AOS.init({
        duration: 1000,
        once: true,    
        offset: 50,     
    });

    // 2. Efeito de Máquina de Escrever para a cartinha
    const letterTextElement = document.getElementById('letter-text');
    
    // ================== PERSONALIZAR AQUI ==================
    // Esta é a sua carta para a Aon, assinada por Vinny.
    // Use \n para pular uma linha.
    const letterContent = `อ้อนที่รัก\n\nถ้าหากคำพูดสามารถบรรยายความรู้สึกของพี่ได้ พี่คงเขียนหนังสือได้ทั้งเล่ม แต่ในเมื่อมันเป็นไปไม่ได้ พี่เลยสร้างเว็บไซต์เล็กๆ นี้ขึ้นมาเพื่อแสดงความรักของพี่ที่มีต่อหนูนะ\n\nทุกช่วงเวลาที่ได้อยู่ข้างๆ หนูคือของขวัญ ขอบคุณที่เป็นหนูแบบนี้นะ\n\nด้วยรักทั้งหมดใจ\nวินนี่ (Vinny)`;
    // =======================================================
    
    let i = 0;
    function typeWriter() {
        if (i < letterContent.length) {
            if (letterContent.charAt(i) === '\n') {
                letterTextElement.innerHTML += '<br>';
            } else {
                letterTextElement.innerHTML += letterContent.charAt(i);
            }
            i++;
            setTimeout(typeWriter, 100); // Velocidade da digitação (100ms)
        }
    }

    const letterSection = document.getElementById('cartinha');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            setTimeout(typeWriter, 500); // Um pequeno atraso para iniciar
            observer.disconnect();
        }
    }, { threshold: 0.1 });

    observer.observe(letterSection);


    // 3. Controle do Player de Música (sem mudanças)
    const music = document.getElementById('background-music');
    const playPauseBtn = document.getElementById('play-pause-btn');

    playPauseBtn.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            playPauseBtn.textContent = '⏸️';
        } else {
            music.pause();
            playPauseBtn.textContent = '▶️';
        }
    });

});