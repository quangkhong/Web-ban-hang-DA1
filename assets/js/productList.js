function changeProductList(type) {
  console.log(type);
  switch (type) {
    case "2":
      document.getElementById("price-default").style.display = "flex";
      document.getElementById("price-higher").style.display = "none";
      document.getElementById("price-lower").style.display = "none";
      break;
    case "1":
      document.getElementById("price-default").style.display = "none";
      document.getElementById("price-higher").style.display = "flex";
      document.getElementById("price-lower").style.display = "none";
      break;
    case "0":
      document.getElementById("price-default").style.display = "none";
      document.getElementById("price-higher").style.display = "none";
      document.getElementById("price-lower").style.display = "flex";
      break;
    default:
      break;
  }
}


function changeImg(id) {
  let imgPath = document.getElementById(id).getAttribute('src');
  document.getElementById('imgMain').setAttribute('src', imgPath);
}