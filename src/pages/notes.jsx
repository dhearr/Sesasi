import Button from "../components/elements/Button";
import { api } from "../api/api";
import InputForm from "../components/elements/Input";
import { useEffect, useState } from "react";

const NotesPage = () => {
  const [notes, setNotes] = useState([]);
  const [detailNote, setDetailNote] = useState([]);
  const [editNote, setEditNote] = useState("");
  const [noteId, setNoteId] = useState("");
  const data = {
    name: localStorage.getItem("name"),
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    try {
      if (!editNote) {
        console.log("edit note is empty");
        return;
      }
      const updateNote = await api.put(`/notes/${noteId}`, {
        note: editNote,
      });

      setEditNote(updateNote.data.note.note);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetEdit = async (id) => {
    try {
      const response = await api.get(`/notes/${id}`);
      setEditNote(response.data.note.note);
      return;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetailNote = async (id) => {
    try {
      const response = await api.get(`/notes/${id}`);
      setDetailNote(response.data.note.note);
    } catch (error) {
      console.log(error);
    }
  };

  // handleDelete
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure?");
    if (confirmDelete) {
      try {
        const response = await api.delete(`/notes/${id}`);
        alert(response.data.message);
        window.location.reload();
      } catch (error) {
        console.log(error);
      }
    }
  };

  // getAllNotes
  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await api.get("/notes");
        setNotes(response.data.notes);
        console.log(response.data.notes);
      } catch (error) {
        console.log(error);
      }
    };
    getNotes();
  }, []);

  // handleCreateNote
  const handleCreateNote = async (e) => {
    e.preventDefault();

    const data = {
      title: e.target.title.value,
      note: e.target.note.value,
    };

    try {
      const response = await api.post("/notes", data);
      alert(response.data.message);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  // handleLogout
  const handleLogout = async () => {
    try {
      const response = await api.post("/logout");

      if (response.status === 200) {
        console.log("logout success");
        localStorage.removeItem("token");
        localStorage.removeItem("name");
        window.location.href = "/login";
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error occurred during logout:", error);
    }
  };

  return (
    <div>
      <div className="flex bg-blue-600 h-16 items-center justify-end">
        {data.name}
        <Button variant="bg-white text-black mx-10" onClick={handleLogout}>
          Logout
        </Button>
      </div>
      <div className="w-full mt-10 max-w-lg mx-auto">
        <form onSubmit={handleCreateNote}>
          <InputForm
            label="Title"
            name="title"
            type="text"
            placeholder="Insert your title"
          />
          <InputForm
            label="Note"
            name="note"
            type="text"
            placeholder="Insert your note"
          />
          <Button variant="bg-blue-600 w-full" type="submit">
            Create Note
          </Button>
        </form>
        <ul>
          {notes.map((note) => (
            <li
              key={note.note_id}
              className="flex justify-between p-5 border-b-2"
            >
              <p>{note.title}</p>
              <Button onClick={() => handleDelete(note.note_id)}>delete</Button>
              <Button onClick={() => handleDetailNote(note.note_id)}>
                prview
              </Button>
              <Button onClick={() => handleGetEdit(note.note_id)}>edit</Button>
            </li>
          ))}
        </ul>
        <div>
          <h1>{detailNote}</h1>
        </div>
        <div>
          <form onSubmit={handleEdit}>
            <InputForm
              label="Title"
              defaultValue={editNote}
              onChange={(e) => setEditNote(e.target.value)}
            />
            <Button type="submit">Submit Edit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
