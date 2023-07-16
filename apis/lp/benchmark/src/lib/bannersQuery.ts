import Banner from "../models/Banner";


export function getBanner() {
    let randomPercentage = Math.random()
    return Banner
        .find({ percentage : { $gte : randomPercentage }}).limit(1)
}

// connectDb().then(() => {
//     console.time('query')
//     getBanner().then((res) => {
//         console.timeEnd('query')
//         console.log(res)
//     })
// })