import React from 'react'
import { useForm } from 'react-hook-form'

export default function FormValidation() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmitForm = (event)  => {
        //...
    }
    const err = {fontSize:'smaller', color:'red', marginTop:3}
    return (
        <div className="container mt-5 p-3 rounded" style={{ width: '400px', background: 'white' }}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <div class="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" id="pd_name" placeholder="Product Name" name="pd_name"
                        {...register('name', { required: true, maxLength: 30 })}
                    />

                    {errors.name && <div style={err}>Incorrect Product name</div>}

                    <label for="pd_name">Product name</label>
                </div>
                <div class="form-floating mb-3 mt-3">
                    <input type="number" class="form-control" id="price" name="price" step="any"
                        {...register('price', {validate: value => parseFloat(value) > 0})}
                    />
                    {errors.name && <div style={err}>Please Enter Product Price</div>}
                    <label for="price">Product Price</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
