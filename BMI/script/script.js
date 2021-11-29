function calculateMetricBMI(heightCMS, weightKGS) {

    var a = heightCMS/100;
    var b = weightKGS;

    var bmi = Math.round((b/(a*a))*10) / 10;

    var check = isNaN(bmi);

    return bmi;

}

function calculateStandardBMI(heightFT, heightIN, weightLB) {

    var a = (heightFT*12) + heightIN;
    var b = weightLB;

    var bmi = Math.round((b*703)/(a*a)*10)/10;

    return bmi;

}