import { CirclePicker } from 'react-color';
import { Button, Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { addNote, FilterNote } from '../redux/NotesSlice'
import './style.css'
const { TextArea } = Input;
const { Search } = Input;

var data = [];

//sasa
function Content() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [color, setColor] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        //input boşsa göndermiyoruz
        if (!title || !content) return;

        if (localStorage.getItem("items") != null) {
            data = JSON.parse(localStorage.getItem("items"));
        }

        data.push({ title: title, content: content, id: nanoid(), background: color.hex })
        localStorage.setItem("items", JSON.stringify(data));

        dispatch(addNote({ title, content, color }))
        setTitle('')
        setContent('')
    }
    const handleChangeComplete = (color) => {
        setColor(color);
        console.log(color.hex)
    }



    const onSearch = (value) => {
        dispatch(FilterNote(value))

    }

    return (
        <div className='card'>

            <Input placeholder="Title" onChange={(e) => setTitle(e.target.value)} className="input" />
            <br />
            <br />
            <TextArea rows={5} style={{ "width": "400px" }} value={content}
                onChange={(e) => setContent(e.target.value)} placeholder="Note" className="input" />
            <br />
            <br />



            <Button type="primary" onClick={handleSubmit}>Send</Button>
            <br />
            <br />
            <Space direction="vertical">
                <Search onSearch={onSearch} style={{ width: 400 }} placeholder='Search Note' className="input" />
            </Space>

            <div className='ortala'>
                <CirclePicker color={color} onChangeComplete={handleChangeComplete} />
            </div>

        </div>
    )
}

export default Content