import { useState, useEffect } from "react"
import { toast } from "react-hot-toast"
import Navbar from "../components/navbar"
import RateLimitedUI from "../components/rateLimitedUI"
import NotesNotFound from "../components/NotesNoteFound"
import NoteCard from "../components/NoteCard"
import api from '../lib/axios'


const HomePage = () => {
  const [isRateLimited, setisRateLimited] = useState(false)
  const [Notes, setNotes] = useState([])
  const [Loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get("/notes")
        console.log(res.data)
        setNotes(res.data.Result)
        setisRateLimited(false)
      } catch (err) {
        console.log(err.toString())
        if (err.response?.status === 429) { 
          setisRateLimited(true)
        } else {
          toast.error("Failed to Load Notes")
        }
      } finally {
        setLoading(false)
      }
    }
    fetchNotes()
  }, [])

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {Loading && (
          <div className="text-center text-primary p-10">
            Loading Note....
          </div>
        )}
        {Notes.length === 0 && !isRateLimited && <NotesNotFound />}

        {Notes.length > 0 && !isRateLimited && (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {Notes.map((note) => (
      <NoteCard key={note._id} note={note} setNotes={setNotes}s/>
    ))}
  </div>
)}
      </div>
    </div>
  )
}

export default HomePage
