function area() {
    return Math.abs(this.x * this.y);
}
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
function solve(area, vol, input) {
    input = JSON.parse(input);
    let result = [];

    for (let el of input) {
        let calculatedArea = area.call(el);
        let calculatedVolume = vol.call(el);
        result.push({
            area: calculatedArea,
            volume: calculatedVolume
        })
    }
    console.log(JSON.stringify(result));
}
// function solve(area, vol, input) {
//     input = JSON.parse(input);
//     function calc(obj) {
//         let areaObj = Math.abs(area.call(obj));
//         let volObj = Math.abs(vol.call(obj));
//         return { area: areaObj, volume: volObj }
//     }
//     return input.map(calc);
// }
solve(area, vol, `[
                 {"x":"1","y":"2","z":"10"},
                 {"x":"7","y":"7","z":"10"},
                 {"x":"5","y":"2","z":"10"}
                 ]`)
// solve(area, vol, `[
//                  {"x":"10","y":"-22","z":"10"},
//                  {"x":"47","y":"7","z":"-5"},
//                  {"x":"55","y":"8","z":"0"},
//                  {"x":"100","y":"100","z":"100"},
//                  {"x":"55","y":"80","z":"250"}
//                  ]`)                        