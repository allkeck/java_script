window.onload = function() {
    let celsius = prompt("Какая температура?", 10);
    let fahrenheit = (9 / 5) * parseInt(celsius) + 32;
    alert(fahrenheit);

    let admin, name;
    name = "Василий";
    admin = name;
    alert(admin);

    alert(1000 + "108");
    alert(1000 + parseInt("108"));
}