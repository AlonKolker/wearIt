import { httpService } from "./http.service"
import data from "../data/data.json" assert { type: "json" }

export const shopService = {
  query,
  addReport,
  getItemById,
  assignTask,
  makeId
}

// async function query(filter) {
 function query() {
  return data
// {  return [
//     {
//     _id:'1',
//     category:'shirts',
//     title:'Check Long Sleeve Shirt',
//     price:'333',
//     sizes:['s','m','xxl'],
//     img:"data:image/jpeg;base64,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",
//     fit:['slim','loose'],
//     colors:["green",'yellow']
//   },
//     {
//     _id:'2',
//     category:'shirts',
//     title:'T-shirt',
//     price:'333',
//     sizes:['s','m','xxl'],
//     img:"data:image/jpeg;base64,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",
//     fit:['slim','loose'],
//     colors:["green",'yellow']
//   },
//     {
//     _id:'3',
//     category:'pants',
//     title:'Check Long Sleeve Shirt',
//     price:'333',
//     sizes:['s','m','xxl'],
//     img:"data:image/jpeg;base64,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",
//     fit:['slim','loose'],
//     colors:["green",'yellow']
//   },
// ]}
  // try {
  //   let organization = await httpService.get("organization", filter)
  //   return organization
  // } catch (err) {
  //   throw err
  // }
}

function makeId(){
   
  var S4 = function() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
 };
 return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());

}
 function addReport(reportInfo) {
  // try {
  //   return await httpService.put("organization/report", reportInfo)
  // } catch (err) {
  //   console.log("addReport canceld")
  //   throw err
  // }
}

 function assignTask(taskInfo) {
  // try {
  //   return await httpService.put("organization/addTask", taskInfo)
  // } catch (err) {
  //   console.log("assignTask canceld")
  //   throw err
  // }
}

 function getItemById(id) {
  let items = data
  let item = items.filter(item=>item._id === id)
  console.log(item)
  return item
  // try{

  //   return await httpService.get(`organization/${employeeId}`)
  // }catch(err){
  //   console.log("getById canceld")
  //   console.log(err)
  // }
}
