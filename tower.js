function towers(input) {
    let tower = [];
    for (i = 0; i < input; i++) {
    tower.push(" ".repeat(input - i - 1)
    + "*".repeat((i * 2)+ 1)
    + " ".repeat(input - i - 1))
}
    tower.push("\n")
    return tower}
    console.log(towers(5));