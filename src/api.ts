const conta = {
    email: 'higor@dio.bank',
    password: '123456',
    name: 'Higor de Campos',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})