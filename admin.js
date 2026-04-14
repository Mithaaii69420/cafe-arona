function loadOrders(){

let orders=JSON.parse(localStorage.getItem("orders"))||[];

let container=document.getElementById("orders");
container.innerHTML="";

orders.forEach((order,index)=>{

let div=document.createElement("div");
div.className="item";

let items=order.items.map(i=>i.name).join(", ");

div.innerHTML=`
<h3>Table ${order.table}</h3>
<p>${items}</p>
<p>${order.time}</p>
<button onclick="completeOrder(${index})">
Completed
</button>
`;

container.appendChild(div);
});
}

function completeOrder(index){

let orders=JSON.parse(localStorage.getItem("orders"));

orders.splice(index,1);

localStorage.setItem("orders",JSON.stringify(orders));

loadOrders();
}

setInterval(loadOrders,2000);
loadOrders();
