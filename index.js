var arr = []; /* 자료(표본)값 */
var arrSum = 0; /* 자료(표본)값의 합계 */
function input(){
    while (true){
        /* 입력값 받기 */
        var inputNum = prompt('자료의 값을 입력해주세요', '숫자로 입력해주세요');
        arr.push(inputNum * 1);  /* 문자열로 입련된 값을 숫자 1을 곱하여 숫자형으로 변환 */
        arrSum += Number(inputNum);  /* 평균값을 구하기 위해 받은 입력값의 합을 누적시켜주기 */
            
        /* 추가로 값을 입력할 것인지 확인하기 */
        var more = confirm('계속 입력하시겠습니까?');
        if (more === true){
            continue;
        } else {
            break;
        }
    }
}
input();
        
var mean = arrSum/arr.length;   /* 평균값 구하기 */
var devTotal = 0;   /* 편차값의 합계 구하기 */
for (var i=0; i < arr.length; i++){
    var dev = arr[i] - mean;
    devTotal += dev * dev;
}
var variance = devTotal/arr.length;   /* 모분산값 구하기 */
var sVariance = devTotal/(arr.length-1);   /* 표본분산값 구하기 */
var stdDev = Math.sqrt(devTotal/arr.length);   /* 모표준편차값 구하기 */
var sStdDev = Math.sqrt(devTotal/(arr.length-1));   /* 표본표준편차값 구하기 */
            
        
document.write('자료값 = [', arr,']<br>');
document.write('자료수 = ', arr.length,'<br>');
document.write('자료의합 =', arrSum,'<br>');
document.write('평균(mean) = ', mean,'<br>');
document.write('편차의합(deviation) = ', devTotal,'<br>');
document.write('모분산(variance) = ', variance,'<br>');
document.write('표본분산(S variance) = ', sVariance,'<br>');
document.write('모표준편차(standard deviation) = ', stdDev,'<br>');
document.write('표본표준편차(S standard deviation) = ', sStdDev,'<br>');