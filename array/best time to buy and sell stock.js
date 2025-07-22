function Maxprofit(prices) {

    let min = prices[0];
    let maxprofit = 0;

    for(let i=1; i<prices.length; i++) {
        if(prices[i] - min > maxprofit) {
            maxprofit = prices[i] - min;
        }
        if(prices[i] < min) {
            min = prices[i];
        }
    }
    return maxprofit;

}
let prices = [3,1,5,6,9, 8,1];
let res = Maxprofit(prices);
console.log(res);