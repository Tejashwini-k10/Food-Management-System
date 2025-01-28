import{foodItems} from './foodItem.js'

console.log(foodItems);

function displayItems(){
    var biryani=document.getElementById('biryani');
    var Chicken=document.getElementById('Chicken');
    var paneer=document.getElementById('paneer');
    var vegetables=document.getElementById('vegetables');
    var Chinese=document.getElementById('chinese');
    var southIndian=document.getElementById('south-indian');

    const biryaniData=foodItems.filter(item=>item.category=='biryani');
    console.log(biryaniData);
    const ChickenData=foodItems.filter(item=>item.category=='Chicken');
    console.log(ChickenData);
    const paneerData=foodItems.filter(item=>item.category=='paneer');
    console.log(paneerData);
    const vegetablesData=foodItems.filter(item=>item.category=='vegetables');
    console.log(vegetablesData);
    const chineseData=foodItems.filter(item=>item.category=='chinese');
    console.log(chineseData);
    const southIndianData=foodItems.filter(item=>item.category=='south-indian');
    console.log(southIndian);

    biryaniData.map(item=>{
        var itemCard=document.createElement('div');
        itemCard.setAttribute('id','item-card');

        var cardTop=document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star=document.createElement('i');;
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText=' '+item.rating;

        var heart=document.createElement('i');;
        heart.setAttribute('class','fa fa-heart-o add-to-cart');
        heart.setAttribute('id','item.id');

        cardTop.appendChild(star);
        cardTop.appendChild(heart);

        var img=document.createElement('img');
        img.src=item.img;

        var itemName=Document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText=itemName.name;


        var itemPrice=Document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText=item.price;

        itemCard.appendChild(cardTop);
        itemCard.appendChild(img);
        itemCard.appendChild(itemName);
        itemCard.appendChild(itemPrice);

        biryani.appendChild(itemCard);

    })
}
displayItems();