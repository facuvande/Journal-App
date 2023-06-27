import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { FirebaseDB } from "../../firebase/config"
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, updateNote, setPhotosToActiveNote, deleteNoteById } from "./journalSlice";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers";

export const startNewNote = () => {
    return async(dispatch, getState) => {
        dispatch( savingNewNote() )
        const { uid } = getState().auth;
        // uid
        // Necesito el uid del user

        console.log('StartNewNote')

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        // Referencia a la coleccion
        const newDoc = doc( collection( FirebaseDB, `${uid}/journal/notes` ) );
        const setDocRes = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id
        
        console.log(newDoc)
        console.log(setDocRes)

        //! dispatch
        dispatch( addNewEmptyNote( newNote ) )
        // Activar la nota
        dispatch( setActiveNote( newNote ) )
        // dispatch(newNote)
        // dispatch(activarNote)

    }
}

export const startLoadingNotes = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth;
        if(!uid) throw new Error('UID inexistente')

        const notes = await loadNotes(uid)

        dispatch(setNotes(notes))
    }
}


export const startSaveNote = () => {
    return async (dispatch, getState) => {

        dispatch(setSaving());

        const { uid } = getState().auth;
        const { active:note } = getState().journal;

        const noteToFirestore = {
            ...note
        }
        delete noteToFirestore.id;

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}` );
        await setDoc(docRef, noteToFirestore, { merge: true });

        dispatch(updateNote(note))
    }
}

export const startUploadingFiles = ( files = [] ) => {
    return async (dispatch )=> {
        dispatch(setSaving());

        const fileUploadPromises = []
        for (const file of files) {
            fileUploadPromises.push( fileUpload(file) );
        }

        const photosUrls = await Promise.all(fileUploadPromises);
        dispatch( setPhotosToActiveNote(photosUrls));
    }
}

export const startDeletingNote = () => {
    return async(dispatch, getState) => {
        const { uid } = getState().auth
        const { active: note } = getState().journal

        const docRef = doc( FirebaseDB, `${uid}/journal/notes/${note.id}`);
        const resp = await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id))
    }
}