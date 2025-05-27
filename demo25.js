const Fname="abdul"
const lName="kawari"

const addName=()=>{
   return `${Fname} rehman ${lName}`
}

// console.log(addName())

const arr1=[-3,-2,-1]
const arr2=[0,1,2,3]

const addArray=()=>{
   const result=[...arr1,...arr2]
   return result
}
const addArrayV2=()=>[...arr1,...arr2]
// console.log(addArray())/

const userData={
   name:"tripal",
   email:"tripal123@gmail.com",
   phn:123,
   hasPassedOut:false,
   occupation:undefined
}

const apiResponse={
   status:404,
   message:"not found",
   data:{}
}

let thisIsFinalUSerData={}

const populateData=()=>{
   if(apiResponse.status ===200 && apiResponse.data){
      thisIsFinalUSerData=apiResponse.data
   }else{
      thisIsFinalUSerData=userData
   }
   return thisIsFinalUSerData
}
console.log(populateData())


// const filterFalsyVal=()=>{
//    let finalUSerData={}
//    for(let key in userData){

//       if(!userData[key]){
//          finalUSerData={...finalUSerData,[key]:userData[key]}
//       }
         
//    }
//    return finalUSerData

// }

// console.log(filterFalsyVal())