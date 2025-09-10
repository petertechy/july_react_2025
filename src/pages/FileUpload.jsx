import axios from 'axios'
import React, { useState } from 'react'

const FileUpload = () => {
    const [myfile, setmyFile] = useState("")
    const [image, setimage] = useState("")

    const changeFile = (e) =>{
        let myImage = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(myImage)
        reader.onload = () =>{
            console.log(reader.result)
            setmyFile(reader.result)
        }
        // let song = new audio("Gubha.mp3")
        // song.play()
    }
    const uploadFile = () =>{
        const endpoint = "http://localhost:5000/upload"
        axios.post(endpoint, {myfile})
        .then((response)=>{
            console.log(response.data)
            setimage(response.data.imageLink)
        })
    }

  return (
    <>
    <div className='mx-auto col-7 shadow border border-2 rounded-4 my-3 p-4'>
        <h1 className='text-primary fs-4 mb-4'>File Upload</h1>
        <input onChange={(e)=>changeFile(e)} type="file" className='form-control mb-3' />
        <button onClick={uploadFile} className='btn btn-outline-primary mb-3'>Upload File</button>

        <img width={700} src={image} alt="This is an image" />
    </div>
    </>
  )
}

export default FileUpload