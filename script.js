
function Add(val) {

    document.getElementById('inputValue').innerHTML += val;

}

function Clear() {

    document.getElementById('inputValue').innerHTML = '';
    document.getElementById('resultValue').innerHTML = '';

}

function Calculate() {

    var c = document.getElementById('inputValue').innerHTML;

    if (c == '')
    {
        document.getElementById('resultValue').innerHTML = '';
    }
    else {
        var t = c.replaceAll('%', '/100');
        t = t.replaceAll('\xB2', '**2');
        t = t.replaceAll('\xB3', '**3');
        result = eval(t);

        document.getElementById('resultValue').innerHTML = result;
    }

}

function Delete() {

    var temp = document.getElementById('inputValue').innerHTML;
    document.getElementById('inputValue').innerHTML = temp.toString().slice(0, -1);
    document.getElementById('resultValue').innerHTML = '';

}

document.getElementById('enterButton').addEventListener('click', Calculate);
document.getElementById('deleteButton').addEventListener('click', Delete);
document.getElementById('clearButton').addEventListener('click', Clear);
