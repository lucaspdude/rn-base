interface Response {
    token: string,
    user: {
        name: string,
        email: string,
    }
}

export function signIn(): Promise<Response>{
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'iaushdiuahsiuhda',
                user: {
                    name: 'lucas',
                    email: 'lucaspdude@gmail.com'
                }
            })
        }, 2000 )
    });
}
