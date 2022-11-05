function buy(money, price, callback) {
  var myMoney = money - price;
  console.log(" buy item with price", price);
  console.log("money left", myMoney);
  callback(myMoney);
}

const buy2 = function (money, price) {
  var myMoney = money - price;
  console.log(" buy item with price", price);
  return new Promise(function (resolve, reject) {
    if (myMoney > 0) {
      resolve(myMoney);
    } else {
      reject("nilai myMoney minus");
    }
  });
};

// class promise memiliki object method then(callback) dan reject(callback)
buy2(10000, 10)
  .then(function (myMoney) {
    console.log("my money => ", myMoney);
    return buy2(myMoney, 100);
  })
  .then(function (myMoney) {
    console.log("my money => ", myMoney);
    return buy2(myMoney, 700);
  })
  .then(function (myMoney) {
    console.log("my money => ", myMoney);
    return buy2(myMoney, 10000);
  })
  .then(function (myMoney) {
    console.log("my money => ", myMoney);
  })
  .catch(function (err) {
    console.log(err);
  });
