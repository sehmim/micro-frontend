import { themes, ThemeType } from './../../util/themes';
import { createSlice } from '@reduxjs/toolkit'
import * as reducers from './reducers'


export interface UIStateType {
    theme: ThemeType
}

export const initialState: UIStateType = {
    theme: themes['defaultTheme']
}

export const UISlice = createSlice({
    name: 'ui',
    initialState,
    reducers
})

export const { toggleTheme } = UISlice.actions
export default UISlice.reducer
