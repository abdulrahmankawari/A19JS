const customer = [
   {id:1,name:"aurum",bought:[{id:1,name:"t-shirt"},{id:"2",name:"earphone"}]},
   {id: 3, name: "sneha", bought: [{id: 5, name: "watch"}, {id: 6, name: "handbag"}]},
   {id: 4, name: "rohit", bought: [{id: 7, name: "laptop"}, {id: 8, name: "mouse"}]},
   {id: 5, name: "anaya", bought: [{id: 9, name: "book"}, {id: 10, name: "pen"}]},
   {id: 6, name: "kabir", bought: [{id: 11, name: "keyboard"}, {id: 12, name: "monitor"}]},
   {id: 7, name: "diya", bought: [{id: 13, name: "phone-case"}, {id: 14, name: "charger"}]}


] 
const customerApi = {
   status: 200,
   message:"customer data fetched successfully",
   data: customer,
};
const getprodutsName = ()=> {
   if(customerApi.status === 200) {
      let boughtProducts = []
      customerApi.data.forEach((customer)=>{
         customer.bought.map((item)=>{
            boughtProducts.unshift(item.name)
         })
      })
      return boughtProducts;
   }
};

console.log(getprodutsName());


const getprodutsName2 = ()=> {
   if(customerApi.status === 200) {
      let boughtProducts = {};
      customerApi.data.forEach((customer)=>{
         customer.bought.map((item)=>{
            if(productNumber[item.id]){
               productNumber[item.id] += 1;
               
            }
            else{
               productNumber[item.id] = 1;
            }
         })
      })
      return productNumber;
   

      
        
   }
}
console.log(getprodutsName2());