export default function getTime(){
  const date = new Date();
  let hours = date.getHours();
  if(hours > 12){
    hours = `${hours - 12}`  
    return `${hours}:${date.getMinutes()} PM`;
  } else{
    hours = `${hours}`  
    return `${hours}:${date.getMinutes()} AM`;
  }
}