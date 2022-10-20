function profitLoss(saleprice, costprice){
    if (saleprice > costprice){
        const profit = saleprice - costprice;
        percentProfit = (profit/costprice) * 100;
        return percentProfit;   
    }
    else {
        const loss = saleprice - costprice;
        percentLoss = (loss/costprice) * 100;
        return percentLoss;
    }
    
}
console.log(profitLoss(140,180));