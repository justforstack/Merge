const fetchProducts=()=>{
    return fetch('https://dummyjson.com/products/1')
    .then(res => res.json())
    .catch(err=>console.log(err))
}
export const fetchData=()=>{
    const userPromise=fetchProducts();
    return{
        user:wrapPromise(userPromise)
    }
}
const wrapPromise=(promise)=>{
    let status='pending';
    let result;
    let suspender=promise.then(
        res=>{
            status='success';
            result=res;
        },
        err=>{
            status='error';
            result=err;
        }
    )
    return {
        read(){
            if(status=='pending'){
                throw suspender;
            }
            else if(status=='error'){
                throw result;
            }
            else if(status=='success'){
                 return result;
            }
        }
    }
}