import {configureStore} from '@reduxjs/toolkit'
import personer from '../src/reducer/personer'
import materialer from '../src/reducer/materialer'

export default configureStore({
    reducer:{
        person:personer,
        material:materialer
    }
})