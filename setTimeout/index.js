let i = 0;
const timerList = []

const say = () => {
  console.log(i ++)
  timerList.push(setTimeout(say, 200))
}

setTimeout(say, 200)

setTimeout(() => {
  for(let i = 0; i < timerList.length; i ++) {
    clearTimeout(timerList[i])
  }
}, 3000)