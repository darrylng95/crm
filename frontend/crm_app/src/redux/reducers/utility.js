export const updateObject = (oldObject, updatedValues) => {
    return {
      ...oldObject,
      ...updatedValues
    }
  }
  
  //if we ever need to get epoch time and calculate difference
  export const calculateDate = (startDate) => {
    let d = new Date(0);
      d.setUTCSeconds(startDate/1000);
      return ("0" + d.getDate()).slice(-2) + "-" + ("0"+(d.getMonth()+1)).slice(-2) + "-" +
      d.getFullYear() + " " + ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  } 