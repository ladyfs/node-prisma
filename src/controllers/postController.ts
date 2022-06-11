import { Request, Response } from 'express'
import { PostService } from '../service/PostService'
//import { UserService } from '../service/UserService'

export const all = async (req: Request, res: Response) => {

    const posts = await PostService.findAll()

    res.json({ posts })

}