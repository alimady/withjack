import axios from "axios"
axios.defaults.baseURL='http://127.0.0.1:8000/api'

 
 export const RegisterUser =  (data) => {
  return new Promise((resolve,reject)=>{
    axios
    .post("/register", data)
    .then((response) => {
       resolve (response.data)
    })
    .catch((e) => {
      reject (e);
    });
  })
  
};

export const LoginUser =  (data) => {
    return new Promise((resolve,reject)=>{
      axios
      .post("/login", data)
      .then((response) => {
         resolve (response.data)
      })
      .catch((e) => {
        reject (e);
      });
    })
    
  };



export const fetchPosts=()=>{ return new Promise((done,fail)=>{
 axios.get('/posts').then((response)=>{
 done(response.data)
 }).catch((error)=>{
 fail(error.data)
 })


})}


 