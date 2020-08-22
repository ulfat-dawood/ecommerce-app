import { API } from "../../backend";

export const createCategory = (userId, token, category) => {
    //http://localhost:8000/api/category/create/5ed3770ebd98763b1c2f8327
    const url =`${API}/category/create/${userId}`
    
    return fetch(`${API}/category/create/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(category)
    })
      .then(response => {
          console.log('respose',response)
        return response.json();
      })
      .catch(err => console.log(err));
  };

export const getCategories = ()=>{
  return fetch(`${API}/categories`, {
    method:"GET"
  }).then(response=> response.json())
  .cathc(err => console.log(err))
}

export const getProducts = ()=>{
  return fetch(`${API}/products`, {
    method:"GET"
  }).then(response=> response.json())
  .cathc(err => console.log(err))
}

export const createaProduct= (userId, token, product)=>{
  return fetch(`${API}/product/create/${userId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body:product
    
  })
  .then(response =>{
    return response.json();
  })
  .cathc(err=> console.log(err))
}
 