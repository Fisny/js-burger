var sumButton = document.getElementById('sum-button');

var sumResult = document.getElementById('sum-result');

sumButton.addEventListener('click', function() {

    var resultTot = 0;

    var checkNum = document.getElementById('somma-check');


    for (var i = 0; i < checkNum.length; i++) {

        if (checkNum[i].checked) {

            resultTot += parseInt(checkNum[i].value);
        }
    }
    sumResult.innerHTML = 'Total: ' + resultTot;
})

