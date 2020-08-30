import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'; 

import Base from '../core/Base'; 
import { getCategories } from './helper/adminapicall';
import { isAuthenticated } from '../auth/helper';


const AddProduct=()=>{

    const {user, toeken}= isAuthenticated(); 

    const [values, setValues]=useState({
        name:'',
        description:'',
        price:'',
        stock:'',
        photo:'',
        categories:[],
        category:'',
        loading:false,
        error:'',
        createdProduct:'',
        getaRedirect:false,
        formData:''

    })

    const {name, description, price, stock,photo,categories,category,loading,error,createdProduct,getaRedirect,formData}= values; 

    const preload= ()=>{
        
        getCategories().then(data=>{
            if(data.error){
                console.log('data',data)
                setValues({...values, error:data.error})
            }else{
                setValues({...values, categories:data, formData: new FormData()})
                 
            }
        })
    }

    useEffect(() => {
        preload();
    }, []);//runs only once on componentDidMount

    const onSubmit= ()=>{

    }

    const handleChange= name=> event=>{

    }

    const createProductForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              name="photo"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              name="photo"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              {/* <option value="a">a</option>
              <option value="b">b</option> */}
              {categories &&
              categories.map((cate,index)=>(
                <option key={index} value={cate}>a</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("quantity")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success">
            Create Product
          </button>
        </form>
      );
    
    return(
        <Base title='Add a produ ct here' description='Product creation section'
        className='container text-white bg-info p-4'>
            <Link to='/admin/dashboard' className='btn btn-md btn-dark mb-3'>Admin Home</Link>
            <div className="row bg-dark text-white rounded">
                <div className="col-md8 offset-md-2">
                    {createProductForm()}
                    
                </div>
            </div>
        </Base>
    )
}
export default AddProduct; 