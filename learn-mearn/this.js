name2 = 'awesomeness2';
c1 = {
    name : "MERN",
    lang: 'javascrpit',
    getDetails: function(){
        const name = "MERN2";
        return "Names :"+name + " "
+this.name+" " + name2;
},
getDetails2 : () => {
   let name = "MERNN3";
    return `Names2:${name} ${this.name} ${name2}`;
}
}// run in console c1 ,c1(),getDetails(),getDetails2() 
// name2 = 'awesomeness2';
// c1 = {
//     name : "MERN",
//     lang: 'javascrpit',
//     getDetails: function(){
//         const name = "MERN2";
//         return "Names :"+name + " "
// +this.name+" " + name2;
// },
// getDetails2 : () => {
//    
//     return {
//         name : "MERN4",
//         getDetails3 : function (){
//    let name = "MERNN3";
//             return "Names: " + name + " "+ this.name+""+ name2;
// }
// }
// }
// }