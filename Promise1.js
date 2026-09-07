const cl=console.log;

let promise= new Promise ((resolve, reject )=>{
    let error =Math.random() <.5;
    if (!error) {
       let data="Data fetch succesfully...";
        resolve(data)
    }else{
        let err="Something went wrong!!";
        reject(err)
    }
},2000)

promise
.then((res)=>{
    cl(res)
})
.catch((rej)=>{
    cl(rej)
})