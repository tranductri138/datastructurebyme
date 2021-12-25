class FindNumber {
    num: number[] = new Array(4);
    in() {
        console.log(this.num);
    }
    tinhSoA(num: number): number {
        let count = 0
        let kq: any = num
        while (kq != 0) {
            kq = kq / 10
            kq = <number>kq.toFixed()
            count++
        }
        return count
    }
}

const a = new FindNumber
// a.in();
// cach 1 
let arr = [1, 3, 2, 3, 45, 6]
let ro: any[] = []
// arr.forEach((values) => {
//     let values1 = values.toString()
//     // console.log(values1.length + ' --- ' + values);
//     if (values1.length % 2 == 0) {
//         ro.push(values)
//     }
// })


// cach 2 
let count = 0
arr.forEach((v) => {
    if (a.tinhSoA(v) % 2 == 0) {
        count++
    }
})
console.log(count);


