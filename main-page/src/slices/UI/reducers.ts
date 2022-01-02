import { PayloadAction } from '@reduxjs/toolkit'
import { ThemeType } from '../../util/themes'
import { UIStateType } from '../UI/UISlice'

export const toggleTheme = (state: UIStateType, { payload }: PayloadAction<ThemeType>) => {
    state.theme = payload
}
