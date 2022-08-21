function maxProfit(array){
    let maxprofit=0;
    let sellingprice=0;
    let buyingprice=0;
    let changebuyingprice=true

    for(i=0;i<array.length-1;i++){
        sellingprice=array[i+1];
        if(changebuyingprice){
        buyingprice=array[i];}
        if(sellingprice<buyingprice){
            changebuyingprice=true;
        }else{
            let profit=sellingprice-buyingprice
            if(profit>maxprofit){
                maxprofit=profit;
            }
            changebuyingprice=false;
        }}
        console.log(maxprofit)
}
maxProfit([100,180,260,310,40,535,695])