let data = [110, 330, 2, -1, 110, 99, 8];

data.sort(function(a,b){return a - b;});
data=data.filter(data => data%2!=0).reverse();

console.log(data[1]);