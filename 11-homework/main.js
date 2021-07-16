async function getRandomChinese() {
    const length = document.querySelector('#length').value;
    let result = '';
    for (let i = 0; i < length; i++) {
        const myPromise = new Promise((resolve) => {
            setTimeout(() => {
                result = String.fromCharCode(+Date.now().toString().slice(-5));
                resolve(result);
            }, length * 50);
        });
        result += await myPromise;
    }
    document.querySelector(".output").innerHTML = result;
}
  

document.querySelector("button").addEventListener("click", getRandomChinese);
