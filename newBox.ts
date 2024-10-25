var data: number[] = [10,20,30,40,50];
data.push(60);

console.log("\nArray Length: " + data.length);

data.forEach(
    (num) => {console.log("\n" + num)}
);