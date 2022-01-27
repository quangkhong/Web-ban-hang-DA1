// function changeProductList(type) {
//   console.log(type);
//   switch (type) {
//     case "2":
//       document.getElementById("price-default").style.display = "flex";
//       break;
//     case "1":
//       break;
//     case "0":
//       break;
//     default:
//       break;
//   }
// }

let dir, i, shouldSwitch, switching; 
let getIdList = document.getElementById("products");
let listItems = getIdList.getElementsByTagName("a");
// let priceItem = listItems[0].getElementsByTagName("p");
// console.log(priceItem[0].innerHTML);
// console.log(listItems);
// console.log(listItems[0].getElementsByTagName("p")[0].innerHTML);

function sortItems(dir) { 
  switching = true;
  while (switching) {
    switching = false;
    for (i = 0; i < listItems.length - 1; i++) {
      shouldSwitch = false;
      if (dir == "asc") {
        if (listItems[i].getElementsByTagName("p")[0].innerHTML > listItems[i+1].getElementsByTagName("p")[0].innerHTML) {
          shouldSwitch = true;
          break;
        }
      } 
      else if (dir == "desc") {
        if (listItems[i].getElementsByTagName("p")[0].innerHTML < listItems[i+1].getElementsByTagName("p")[0].innerHTML) {
          shouldSwitch = true; 
          break;
        }
      }
    }
    if (shouldSwitch) {
      listItems[i].parentNode.insertBefore(listItems[i + 1], listItems[i]);
      switching = true;
    } 
  }
}
