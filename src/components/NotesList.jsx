import React from 'react'
import { Card, Row, Col, Divider, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import style from './style.module.css'
import { destroyNote } from '../redux/NotesSlice'
function NotesList() {

    const notes = useSelector(state => state.notes.notes)
    const FilteredText = useSelector(state => state.notes.ActiveFilter)
    const temp = JSON.parse(localStorage.getItem("items"));
    var ActiveFilter = false

    const dispatch = useDispatch()

    if (temp != null || temp != undefined) {
        var filtered = temp.filter((item) => {
            if (FilteredText)
                ActiveFilter = true
            return Object.keys(item).some((key) =>
                item[key].toString().toLowerCase().includes(FilteredText.toLowerCase())
            )

        })
    }

    return (
        <>
            <Divider orientation="center" style={{ fontSize: "22px" }}>Notes  </Divider >
            <Row gutter={0}>
                {
                    //silme
                    temp != null && ActiveFilter == false && temp.map((filtered, index) =>
                        <Card
                            style={{ width: "250px", margin: "10px", height: "200px", background: filtered.background, border: "1px solid black", borderRadius: "21px" }}
                            key={index}
                            title={filtered.title}
                            className={style.zoom}
                            extra={<Button type="primary" danger onClick={() => dispatch(destroyNote(filtered.id))}>Delete</Button>}>
                            <a href="#/" >
                                <p style={{ color: "black" }}>
                                    {filtered.content}
                                </p>
                            </a>
                        </Card>
                    )

                }
                {
                    temp != null && ActiveFilter == true && filtered.map((filtered, index) =>
                        <Card
                            style={{ width: "250px", margin: "10px", height: "200px", background: filtered.background, border: "1px solid black", borderRadius: "21px" }}
                            key={index}
                            title={filtered.title}
                            className={style.zoom}
                            extra={<Button type="primary" danger onClick={() => dispatch(destroyNote(filtered.id))}>Delete</Button>}>
                            <a href="#/" >
                                <p style={{ color: "black" }}>
                                    {filtered.content}
                                </p>
                            </a>
                        </Card>
                    )
                }
            </Row>
        </>

    )
}

export default NotesList


