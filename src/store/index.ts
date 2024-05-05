import { configureStore } from '@reduxjs/toolkit' 

export const store = configureStore({
    reducer: {

    }
})

export type AppStore = ReturnType<typeof store.getState>


export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']