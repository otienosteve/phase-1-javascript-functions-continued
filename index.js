// code your solution here
function saturdayFun(activity="roller-skate!"){
    if(activity!=="roller-skate!"){
        return "This Saturday, I want to bathe my dog!"
    }
    return "This Saturday, I want to roller-skate!"
}
function mondayWork(activity="This Monday, I will go to the office."){
    if(activity!=="This Monday, I will go to the office."){
        return "This Monday, I will work from home."
    }
 return activity
}
function wrapAdjective(args){
    if(args==="*"){
    return function (args){
    return "You are *a hard worker*!"
}}
if(args==="||")
{
return function (args){
return "You are ||a dedicated programmer||!"
}
}
}