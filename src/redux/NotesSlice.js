import { createSlice,nanoid } from "@reduxjs/toolkit";

const temp = JSON.parse(localStorage.getItem("items"));
export const NotesSlice=createSlice({
    name:"notes",
    initialState:{
        notes:[],
        ActiveFilter: "",

    },

    reducers:{
        addNote: {
            reducer: (state, action) => {
                //addTodo'nun amacı state'in altındaki items objesini pushlamak
                state.notes.push(action.payload);
            
            },
            //prepare'ın yaptığı şey: reducers state'i değiştirmeden önce siz ona gelecek olan payload'u yapılandırabiliyorsun demek.

            //addtodoya gelen dispatch ilk prepare'a ondan sonra reducer'a ve reducer altındaki action'a düşecek.
            prepare: ({ title,content,color }) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        color,
                        
                    }
                }
            }
        },
        FilterNote:{
            reducer: (state, action) => {
                state.ActiveFilter = action.payload;
                
        },
      
    },destroyNote:{
        reducer:(state,action)=>{
            const id=action.payload;

            const filtered=temp.filter(item=>item.id!==id);

            localStorage.setItem("items",JSON.stringify(filtered));
            state.notes=filtered;
        }
    }

    }

})
export const { addNote,FilterNote,destroyNote } = NotesSlice.actions;

export default NotesSlice.reducer;