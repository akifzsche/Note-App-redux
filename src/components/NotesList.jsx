import React from 'react'
import { Card, Row, Col, Divider } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import style from './style.module.css'

function NotesList() {

    const notes = useSelector(state => state.notes.notes)
    const FilteredText = useSelector(state => state.notes.ActiveFilter)
    const temp = JSON.parse(localStorage.getItem("items"));
    var ActiveFilter = false


    if (temp != null || temp != undefined) {
        var filtered = temp.filter((item) => {
            if (FilteredText)
                ActiveFilter = true
            return Object.keys(item).some((key) =>
                item[key].toString().toLowerCase().includes(FilteredText.toLowerCase())
            )

        })
    }

    console.log(ActiveFilter)
    return (
        <>
            <Divider orientation="center" style={{ fontSize: "22px" }}>Notes  </Divider >
            <Row gutter={0}>
                {
                    //silme
                    temp != null && ActiveFilter == false && temp.map((filtered, index) =>
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
                {
                    temp != null && ActiveFilter == true && filtered.map((filtered, index) =>
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


