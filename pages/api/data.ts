// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
// import { db } from './db';

type Data = {
    email: string
    password: any
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    // let results = await db.query('SELECT * FROM videos')

    // await db.end()
    console.log(req.body);
    

    res.status(200).json({ email: req.body.email, password: req.body.password })
}
