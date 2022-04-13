import React from 'react'
import { Button, Input, Space } from 'antd';
import { AudioOutlined } from '@ant-design/icons';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addNote } from '../redux/NotesSlice'
const { TextArea } = Input;


const { Search } = Input;

const suffix = (
    <AudioOutlined
        style={{
            fontSize: 16,
            color: '#1890ff',
        }}
    />
);

const onSearch = value => console.log(value);


function Content() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        //input boşsa göndermiyoruz
        if (!title || !content) return;

        dispatch(addNote({ title, content }))
        setTitle('')
        setContent('')
    }



    return (
        <div>

            <Input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            <br />
            <br />
            <TextArea rows={5} style={{ "width": "400px" }} value={content}
                onChange={(e) => setContent(e.target.value)} placeholder="Note" />
            <br />


            <Button type="primary" onClick={handleSubmit}>Send</Button>
            <br />
            <br />
            <Space direction="vertical">
                <Search placeholder="input search text" onSearch={onSearch} style={{ width: 400 }} />
            </Space>
        </div>
    )
}

export default Content