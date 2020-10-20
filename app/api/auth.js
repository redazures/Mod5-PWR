import client from './client'

const login = (email,password)=>{
    console.log("getting logins from my cousin greg", email, password)
    // const user_login_params={
    //     email:email,
    //     password:password
    // }
    return client.post('/login',{email,password})
}


const signup = (name, title, email, password, employee_id)=>{
    // const user = new FormData()

    const user={
        name:name,
        title:title,
        password_digest:password,
        employee_id:employee_id,
        email:email,
    }
    // user.append("name", name)
    // user.append("title", title)
    // user.append("password", password)
    // user.append("employee_id", employee_id)
    // user.append("email", email)
    // console.log(user)

    return client.post('/users',user)
}


export default { login, signup }