const a = new Set([1,2,3])
const b = new Set([2,3,4])

const diff = new Set([...a].filter(item => b.has(item)));

console.log(Array.from(diff))