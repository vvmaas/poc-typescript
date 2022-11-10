import { postNote, getNotes, updateNote, deleteNote, getNotesByKeyword } from "../repositories/posts.repository.js";
function post(req, res) {
    var body = req.body;
    var text = body.text;
    try {
        postNote(text);
        res.sendStatus(201);
    }
    catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}
function getAll(req, res) {
    try {
        var notes = getNotes();
        res.send(notes);
        res.sendStatus(200);
    }
    catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}
function update(req, res) {
    var body = req.body;
    var text = body.text;
    var id = Number(req.params.id);
    try {
        updateNote(text, id);
        res.sendStatus(204);
    }
    catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}
function deleteById(req, res) {
    var id = Number(req.params.id);
    try {
        deleteNote(id);
        res.sendStatus(204);
    }
    catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}
function getByKeyword(req, res) {
    var keyword = req.params.keyword.toString();
    try {
        getNotesByKeyword(keyword);
        res.sendStatus(200);
    }
    catch (error) {
        res.sendStatus(500);
        console.log(error);
    }
}
export { post, getAll, update, deleteById, getByKeyword };
