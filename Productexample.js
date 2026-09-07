const cl=console.log;

let promise =new Promise((resolve, reject )=>{
     let error=Math.random() <.5;
     if(!error){
     let data='Data fetch succefully...';
     resolve(data);

     }else{
        let err='Something wrong!!!!';
        reject(err);
     }
})

promise 
.then((res)=>{
    cl(res)

})
.catch((rej)=>{
    cl(rej)

})

//Product 
function FetchProduct(){
let product =new Promise((resolve, reject)=>{
    let error=Math.random() <5.;
    if(!error){
    let data ='Product Fetch Succesfully....';
    resolve(data);
    }else{
        let err='fetch wrong product';
        reject(err);
    }
},900)
}

 