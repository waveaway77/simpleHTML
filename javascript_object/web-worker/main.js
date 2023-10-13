const worker = new Worker("./generate.js"); // Worker() 생성자에 워커 스크립트를 전달한다. 워커 생성 즉시 스크립트가 실행될 것이다.

// 버튼에 이벤트 처리기를 추가한다. 이전과 다르게 함수를 호출하는 대신 워커에게 메세지를 보낸다.
document.querySelector("#generate").addEventListener("click", () => {
    const quota = document.querySelector("#quota").value;
    worker.postMessage({ // 버튼을 누를 경우 워커에게 메세지를 전송한다
        command: "generate",
        quota: quota,
    });
});


// worker가 이벤트가 발생하여 main thread로 메시지를 보낼 때, #output을 업데이트한다.
worker.addEventListener("message", (message) => { // 워커에게 message 이벤트 처리기를 추가
    document.querySelector(
        "#output",
    ).textContent = `Finished generating ${message.data} primes!`; //  처리기는 메시지의 data 속성에서 데이터를 가져와 출력한다.
});

document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#user-input").value =
        'Try typing in here immediately after pressing "Generate primes"';
    document.location.reload();
});