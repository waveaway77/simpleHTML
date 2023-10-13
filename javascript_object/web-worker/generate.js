// 메인 스크립트가 워커를 만들자마자 이 코드를 실행한다

// 워커가 가장 먼저 하는 일은 워커의 전역 함수인 addEventListener()을 사용하여 메인 스레드의 메세지를 listen하는 것이다.
// 메세지의 명령어가 "generate이라면 generatePrimes() 함수를 호출한다.
addEventListener("message", (message) => {
    if (message.data.command === "generate") { // data 속성은 메인 스크립트에서 전달된 인수의 복사본이 들어있다.
        generatePrimes(message.data.quota);
    }
});

function generatePrimes(quota) {
    function isPrime(n) {
        for (let c = 2; c <= Math.sqrt(n); ++c) {
            if (n % c === 0) {
                return false;
            }
        }
        return true;
    }

    const primes = [];
    const maximum = 1000000;

    while (primes.length < quota) {
        const candidate = Math.floor(Math.random() * (maximum + 1));
        if (isPrime(candidate)) {
            primes.push(candidate);
        }
    }

    // 값을 반환하는 대신 작업이 끝나면 워커의 전역 함수인 postMessage()함수를 사용하여 메인 스크립트로 메시지를 보낸다.
    postMessage(primes.length);
    //  메인 스크립트는 이 메시지를 수신하고 있으며 메시지가 수신되면 DOM을 업데이트한다.
}
