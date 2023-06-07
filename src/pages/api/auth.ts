import type { NextApiRequest, NextApiResponse } from 'next'

type TResponseAuth = {
    access_token: string
    refresh_token: string
    role: 'admin' | 'user'
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<TResponseAuth | { error: string }>
) {
    if (req.method === 'POST') {
        const { username, password } = req.body

        if (username === 'admin@admin.ru' && password === 'password') {
            res.status(200).json({
                access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
                refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJleHAiOjE1MTYyMzkwMjJ9.YWxhZGRpbjpvcGVuc2VzYW1l',
                role: 'admin',
            })
        } else if (username === 'user@user.ru' && password === 'password') {
            res.status(200).json({
                access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNjIyNzExMjE1LCJleHAiOjE2MjI3MTQ4MTUsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdfQ.JzMkjWmY4EZlq76skXHn6b_gVqQhH9AV_2PQm-4Vi1g',
                refresh_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwicmVmcmVzaCI6eyJ1c2VySWQiOiIxMjM0NTY3ODkwIiwidXNlck5hbWUiOiJKb2huIERvZSIsImVtYWlsIjoiam9obkBlbWFpbC5jb20ifSwiaWF0IjoxNjIyNzExMjE1LCJleHAiOjE2MjI3MTQ4MTUsImp0aSI6IjFmM2YwNzI4LTY5OWUtNDg3My04ZmM5LTYyN2IwY2EwMTJjMyJ9.y63GgtyheJ3hDJGZIdgkxGLBhZXXaJn1F-k-wH4Xftw',
                role: 'user',
            })
        } else {
            res.status(401).json({ error: 'Неверные учетные данные' })
        }
    } else {
        res.status(405).json({ error: 'Метод не разрешен' })
    }
}
