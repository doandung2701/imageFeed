export  function getInitials(fullname) {
    var array=fullname.split(" ");
    var result='';
    for (let i = 0; i < array.length; i++) {
        let element = array[i][0];
       result=result+element;
    }
    return result.toLocaleUpperCase();
}
export  function getAvatarColor(fullname) {
    var array=fullname.split(" ");
    var result='';
    for (let i = 0; i < array.length; i++) {
        let element = array[i][0];
       result=result+element;
    }
    return result.toLocaleUpperCase();
}
export const fetchImages=async () =>{
    const response=await fetch(`https://picsum.photos/list`);
    const data =await response.json();
    return data;
}