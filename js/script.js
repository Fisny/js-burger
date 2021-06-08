
var sumButton = document.getElementById('sum-button');

var sumResult = document.getElementById('sum-result');

sumButton.addEventListener('click', function() {

    var resultTot = 5;

    var checkNum = document.getElementsByClassName('somma-check');


    for (var i = 0; i < checkNum.length; i++) {

        if (checkNum[i].checked) {

            resultTot += parseInt(checkNum[i].value);
        }
    }
    sumResult.innerHTML = 'Total: ' + resultTot + '€';
})

