import React from 'react'
import { useForm } from 'react-hook-form'

export default function RegisterForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmitForm = (event) => {
        //...
    }
    const err = { fontSize: 'smaller', color: 'red', marginTop: 5 }
    return (
        <div className="container-fluid mt-3 rounded" style={{ width: '400px', background: 'pink' }}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
            <p class="h1" align="center">Register</p>
                <div class="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" id="username" placeholder="Username" name="username"
                        {...register('username', { required: true, maxLength: 30, minLength: 10 })}
                    />
                    <small id="passwordHelpInline" class="text-muted">
                        Must be 10-30 characters long.
                    </small>
                    {errors.username && <div style={err}>Can't use this username</div>}

                    <label for="rg_username">Username</label>
                </div>
                <div class="form-floating mb-3 mt-3">
                    <input type="password" class="form-control" id="password" placeholder="Password" name="password"
                        {...register('password', { required: true, minLength: 8, maxLength: 20 })}
                    />
                    <small id="passwordHelpInline" class="text-muted">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </small>

                    {errors.password && <div style={err}>Can't use this password</div>}

                    <label for="rg-password">Password</label>
                </div>
                <div class="form-floating mb-3 mt-3">
                    <input type="text" class="form-control" id="name" placeholder="Name" name="name"
                        {...register('name', { required: true, maxLength: 30 })}
                    />
                    <small id="passwordHelpInline" class="text-muted">
                        Must be 10-30 characters long.
                    </small>

                    {errors.name && <div style={err}>Please Enter Name</div>}

                    <label for="pd_name">Name</label>
                </div>
                <p class="h4">Gender :</p>
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="radio1" name="optradio" value="option1" checked />
                    <label class="form-check-label" for="radio1">: Male</label>
                </div>
                <div class="form-check">
                    <input type="radio" class="form-check-input" id="radio2" name="optradio" value="option2" />
                    <label class="form-check-label" for="radio2">: Female</label>
                </div>
                <p class="h4">Salary</p>
                <select class="form-select" id="sel1" name="sellist1">
                    <option>0-10000</option>
                    <option>10000-20000</option>
                    <option>20000-30000</option>
                    <option>30000-40000</option>
                </select>
                <p class="h4">Age :</p>
                <div class="form-floating mb-3 mt-3">
                    <input type="number" class="form-control" id="age" name="age" step="any"
                        {...register('price', { validate: value => parseFloat(value) > 0 })}
                    />
                    {errors.name && <div style={err}>Incorrect Age</div>}
                    <label for="age">Age</label>
                </div>
                <p class="h4">Interested</p>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                    <label class="form-check-label" for="inlineCheckbox1"> : Game</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2"> : Music</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                    <label class="form-check-label" for="inlineCheckbox2"> : Reading</label>
                </div>
                <br></br>
                <div align="center">
                    <button type="button" class="btn btn-success btn-block">Register</button> &nbsp;
                    <button type="button" class="btn btn-danger btn-block">Cancel</button>
                </div>
            </form>
        </div>
    )
}
