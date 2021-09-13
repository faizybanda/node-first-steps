/*function greet(name) {
    if (name) {
        return "hello";
    }
    return "hello, " + name;

}

var msg = greet("xola")

console.log(msg)

msg.greet */

module.exports = function (name) {
    return 'Hello, ' + name;
}