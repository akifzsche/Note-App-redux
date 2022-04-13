import React from 'react'
import { Card, Row, Col, Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux'


function NotesList() {
    // const dispatch = useDispatch()
    const notes = useSelector(state => state.notes.notes)
    console.log(notes)
    return (
        <>
            <Divider orientation="center" style={{ fontSize: "22px" }}>Notes  </Divider >
            <Row gutter={0}>
                {
                    notes.map(note => (
                        <Col className="gutter-row" >

                            <Card
                                style={{ width: "250px", margin: "10px", height: "200px" }}
                                key={note.id}
                                title={note.title}
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
            </Row>
        </>

    )
}

export default NotesList


