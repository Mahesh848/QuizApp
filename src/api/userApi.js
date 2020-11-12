const users = []

export const  saveUser = (user) => {
    users.push(user)
}

export const matchUser = (email, password) => {
    const user = users.filter(user => {
        return user.password === password && user.email === email
    })
    return user != null
}