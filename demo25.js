const UserData = [
   {id:1, name:"abdul", gender:"male", age:21, occupation:undefined},
   {id:2, name:"Sumit", gender:"male", age:19, occupation:"intern"},
   {id:3, name:"Ritu", gender:"female", age:19, occupation:"noting"}
];

const response = {
   status: 200,
   message: "user data fetched successfully",
   data: UserData
};

const fetchUserName = () => {
   if(response.status === 200){
      const result = response.data
      .filter((user) => user.occupation !== undefined || user.age >=21)
      .map((user) => user.name);
      return result;
   } else {
      return "API fetch failed";
   }
};

console.log(fetchUserName());  // Output: ["abdul", "Sumit", "Ritu"]
