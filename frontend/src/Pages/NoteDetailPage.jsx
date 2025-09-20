import { useEffect, useState } from "react"
import { useNavigate ,useParams} from "react-router"
import toast, { LoaderIcon } from "react-hot-toast"
import {Link} from 'react-router'
import api from'../lib/axios'
import { ArrowLeftIcon, Trash2Icon } from "lucide-react"



const NoteDetailPage=()=>{

    const [note,setNote]=useState(null)
    const [loading,setLoading]=useState(true)
    const [saving,setSaving]=useState(false)

    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
            const fetchNotes=async()=>{
                    try{
                        const res = await api.get(`/notes/${id}`)
                        setNote(res.data)
                    }catch(err){
                            toast.error('Failled To Load Note')
                    }finally{
                        setLoading(false)
                    }
            }
            fetchNotes();
    },[id])
    const handleDelete=async(e)=>{
        if(window.confirm("Are You Sure you want To Delete it ...?")){
            try{
                await api.delete(`/notes/${id}`)
                toast.success("Note Deleted")
                navigate('/')
            }catch(err){
                    toast.error("Failed Deleting the Note")
                    console.log(err.toString())
            }
        }
    }
    const handleSave=async(e)=>{
            if(!note.title.trim() > 0|| !note.content.trim() >0){
                toast.error("Please add a Title or Content")
                return
            }
            setSaving(true)
            try{        
                await api.put(`/notes/${id}`,note)
                toast.success("Note Updated Successfully")
                navigate('/')
            }catch(err){
                     toast.error("Failed Updating the Note")
                    console.log(err.toString())
            }finally{
                setSaving(false)
            }
    }
        if(loading){
            return(<>
                    <div className="min-h-screen bg-base-200 flex items-center justify-center">
                        <LoaderIcon className="animate-spin size-10"/>
                    </div>
            </>)
        }

    return(
        <>
            <div className="min-h-screen bg-base-200">
                <div className="container ms-auto px-4 py-8">
                    <div className="max-w-2xl mx-auto"> 
                        <div className="flex items-center justify-between mb-6">
                            <Link to={"/"} className="btn btn-ghost">
                                <ArrowLeftIcon className="h-5 w-5"/>
                                    Back To Notes
                            </Link>
                            <button onClick={handleDelete} className='btn btn-error btn-outline'>
                                <Trash2Icon className="h-5 w-5"/>
                                Delete Note
                            </button>
                        </div>
                        <div className="card bg-base-100">
                            <div className="card-body">
                                <div className="form-control mb-4">

                                    
                                    <label className="label">
                                        <span className="label-text">
                                            Title
                                        </span>                                    
                                    </label>
                                    <input 
                                    type="text"
                                    placeholder="Note Title "
                                    className="input input-bordered"
                                    value={note?.title || ""}
                                    onChange={(e)=>setNote({...note,title:e.target.value})}/>
                                </div>
                                <div className="form-control mb-4">
                                    <label className="label">
                                        <span className="label-text">Content</span>
                                    </label>
                                    <textarea
                                            placeholder="Write Your note here"
                                            className="textarea textarea-boardered h-32"
                                            value={note.content}
                                            onChange={(e)=>setNote({...note,content:e.target.value})}/>
                                </div>
                                <div className="card-actions flex justify-end">
                                    <button
                                        className="btn btn-primary"
                                        disabled={saving}
                                        onClick={handleSave}
                                    >
                                        {saving ? "Saving..." : "Save Changes"}
                                    </button>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default NoteDetailPage
