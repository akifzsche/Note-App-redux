import { createSlice,nanoid } from "@reduxjs/toolkit";


export const NotesSlice=createSlice({
    name:"notes",
    initialState:{
        notes:[
            {
                id: 1,
                title: 'Birinci Not',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
               
            },
            {
                id: 2,
                title: 'İkinci Not',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.'
                
            }
        ],
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
            prepare: ({ title,content }) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        
                    }
                }
            }
        },
        FilterNote:{
            reducer: (state, action) => {
                state.ActiveFilter = action.payload;
                
        },
      
    }
    }

})
export const { addNote,FilterNote } = NotesSlice.actions;

export default NotesSlice.reducer;