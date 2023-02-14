
// Factory Function
function createObj(len,bre){
    return rectangle={
        length:len,
        bradth:bre,
        draw:function(){
            console.log('Drawing Rectangle')
        }
    }    
}
 let obj2=createObj(5,6);

 // Constructor Function
 function Square(val){
    this.side=val,  
    function show(){
        console.log('Showing Square');
    }
 }
 let newObj=new Square(2);

