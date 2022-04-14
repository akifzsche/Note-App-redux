import React from 'react'
import { Card, Row, Col, Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import style from './style.module.css'

function NotesList() {

    const notes = useSelector(state => state.notes.notes)
    const FilteredText = useSelector(state => state.notes.ActiveFilter)

    const filtered = notes.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key].toString().toLowerCase().includes(FilteredText.toLowerCase())
        )
    })


    return (
        <>
            <Divider orientation="center" style={{ fontSize: "22px" }}>Notes  </Divider >
            <Row gutter={0}>
                {
                    FilteredText == null && notes.map(note => (
                        <Col className="gutter-row" >

                            <Card
                                style={{ width: "250px", margin: "10px", height: "200px" }}
                                key={note.id}
                                title={note.title}
                                className={style.zoom}
                                extra={<a href="#">Delete</a>}>
                                <a href="#/" >
                                    <p style={{ color: "black" }}>
                                        {note.content}
                                    </p>
                                </a>
                            </Card>

                        </Col>
                    ))
                }
                {
                    FilteredText != null && filtered.map((filtered, index) =>
                        <Card
                            style={{ width: "250px", margin: "10px", height: "200px" }}
                            key={index}
                            title={filtered.title}
                            className={style.zoom}
                            extra={<a href="#">Delete</a>}>
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


