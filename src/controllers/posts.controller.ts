import { Request, Response } from "express";
import { Post, PostEntity } from "../protocols/posts.protocols.js";
import { postNote, getNotes, updateNote, deleteNote, getNotesByKeyword } from "../repositories/posts.repository.js";

function post(req: Request, res: Response) {

    const body = req.body as Post
    
    const text: string = body.text
    try {
        postNote(text)

        res.sendStatus(201)
    } catch (error) {
        res.sendStatus(500)
        console.log(error);
    }
}

async function getAll(req: Request, res: Response) {
    try {
        const notes = await getNotes()

        const rows: PostEntity[] = notes.rows

        res.send(rows)
    } catch (error) {
        res.sendStatus(500)
        console.log(error);
    }
}

async function update(req: Request, res: Response) {

    console.log(req.body);
    

    const body = req.body as Post
    
    const text: string = body.text
    const id: number = Number(req.params.id)
    try {
        await updateNote(text, id)

        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(500)
        console.log(error);
    }
}

function deleteById(req: Request, res: Response) {
    const id: number = Number(req.params.id)
    
    try {
        deleteNote(id)

        res.sendStatus(204)
    } catch (error) {
        res.sendStatus(500)
        console.log(error);
    }
}

async function getByKeyword(req: Request, res: Response) {
    const keyword: string = req.params.keyword.toString()
    try {
        const notes = await getNotesByKeyword(keyword)

        const rows: PostEntity[] = notes.rows

        res.send(rows)
    } catch (error) {
        res.sendStatus(500)
        console.log(error);
    }
}

export {post, getAll, update, deleteById, getByKeyword}