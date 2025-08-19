import {useEffect, useState} from "react";

export default function NoteSaver() {
    const [note, setNote] = useState("");
    const [lastSaved, setLastSaved] = useState<string | null>(null);

// Load saved note on mount
    useEffect(() => {
        const savedNote = localStorage.getItem("myNote");
        if (savedNote) {
            setNote(savedNote);
        }
    }, []);

// Auto-save every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            localStorage.setItem("myNote", note);
            setLastSaved(new Date().toLocaleTimeString());
        }, 5000);

        return () => clearInterval(interval); // cleanup

    }, [note]);

    return (
        <div style={{padding: "1rem", fontFamily: "sans-serif"}}>
            <h2>My Notes</h2>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={5}
                cols={40}
            />
            <p>Characters: {note.length}</p>
            {lastSaved && <p>Last saved at: {lastSaved}</p>}
        </div>
    );
}