import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{ message: string }>
) {
    if (req.method === 'POST') {
        const { username, email, password } = req.body

        if (username && email && password) {
            res.status(200).json({ message: 'Регистрация прошла успешно' })
        } else {
            res.status(400).json({ message: 'Необходимо заполнить все поля' })
        }
    } else {
        res.status(405).json({ message: 'Метод не разрешен' })
    }
}
