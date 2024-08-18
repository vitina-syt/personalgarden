import {configureStore} from '@reduxjs/toolkit'
import personer from '../src/reducer/personer'

export default configureStore({
    reducer:{
        person:personer
    }
})