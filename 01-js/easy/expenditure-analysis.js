/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
	var spend = {};
  for(let i=0;i<transactions.length;i++){
      var t=transactions[i];
      if(spend[t.category])
         spend[t.category]=spend[t.category]+t.price;
      else
        spend[t.category]=t.price;
    }
  console.log(spend);
  var arr=Object.keys(spend)
  var ans=[]
  for(let i=0;i<arr.length;i++){
    var category=arr[i];
    var obj={
      category: category,
       totalSpent: spend[category]
  }
    ans.push(obj);
  }
  console.log(ans);
  return ans;
}

module.exports = calculateTotalSpentByCategory;
