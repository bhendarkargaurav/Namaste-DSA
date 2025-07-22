
function Maxprofit(prices) {

    let min = prices[0];
    let maxProfit = 0;

    for(let i=1; i<prices.length; i++) {
        if(prices[i] - min > maxProfit) {
            maxProfit = prices[i]-min;
        }
        if(prices[i] < min) {
            min = prices[i];
        }
    }
    return maxProfit;
}
let prices = [3,1,5,6,9, 8,1];
let res = Maxprofit(prices);
console.log(res);