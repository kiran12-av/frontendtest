export const getsearchapi=async()=>{
    return await fetch('https://workmate-svc-test2.kubeodc-test.corp.intranet/RestService/Enterprise/v4/Work/task/advancedSearch?include=p,aa').then((res)=>
    res.json())
}