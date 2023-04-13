export default function initCountdown() {

  function countdown() {
    const contagemData = new Date("Dec 25, 2023 23:59:00").getTime();
    const agoraData = new Date().getTime();
    const tempoRestante = contagemData - agoraData;

    const segundo = 1000
    const minuto = segundo * 60
    const hora = minuto * 60
    const dia = hora * 24

    const diasRestantes = Math.floor(tempoRestante / dia)
    const horasRestantes = Math.floor((tempoRestante % dia) / hora)
    const minutosRestantes = Math.floor((tempoRestante % hora) / minuto)
    const segundosRestantes = Math.floor((tempoRestante % minuto) / segundo)

    document.querySelector("[data-timer='dias']").innerText = diasRestantes
    document.querySelector("[data-timer='horas']").innerText = horasRestantes
    document.querySelector("[data-timer='minutos']").innerText = minutosRestantes
    document.querySelector("[data-timer='segundos']").innerText = segundosRestantes
  };

  setInterval(countdown, 1000)
};
