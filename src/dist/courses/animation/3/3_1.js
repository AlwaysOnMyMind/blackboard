const interpolate = (rangeA, rangeB) => {
  return (value) => {
    const r = (rangeB[1] - rangeB[0]) / (rangeA[1] - rangeA[0])
    return rangeB[0] + r *  (value - rangeA[0])
  }
}

const it1 = interpolate([0, 200], [0, 1])
const it2 = interpolate([0, 1], [100, 300])
const t = 30 // 10ms
const t_prime = it1(t)
console.log("t' is " + t_prime)

const s = t_prime * t_prime // s = t^2

const d = it2(s)

console.log("distance is :" + d)



