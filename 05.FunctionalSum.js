function add(num) {
    let sum = 0;
    sum += num;

    function inner(number) {
        sum += number;
        return inner;
    }

    inner.toString = () => sum;
    return inner;

}
console.log(add(1)(6)(-3).toString());
console.log(add(1).toString());