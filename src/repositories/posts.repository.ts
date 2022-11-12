import connection from "../database/db.js";
import { QueryResult } from "pg"
import { PostEntity } from "../protocols/posts.protocols.js";

async function postNote(text: string): Promise<QueryResult> {
    return await connection.query(`INSERT INTO posts (text) VALUES ($1)`, [text])
}

async function getNotes(): Promise<QueryResult<PostEntity>> {
    return connection.query(`SELECT * FROM posts ORDER BY created_at DESC`)
}

async function updateNote(text: string, id: number): Promise<QueryResult> {
    return await connection.query(`UPDATE posts SET text=$1 WHERE id=$2`, [text, id])
}

async function deleteNote(id: number): Promise<QueryResult> {
    return await connection.query(`DELETE FROM posts WHERE id=$1`, [id])
}

async function getNotesByKeyword(keyword: string): Promise<QueryResult<PostEntity>> {
    return connection.query(`SELECT * FROM posts WHERE text ILIKE ('%' || $1 || '%') ORDER BY created_at DESC`, [keyword])
}

export {postNote, getNotes, updateNote, deleteNote, getNotesByKeyword}