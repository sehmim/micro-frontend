export const themes: ITheme = {
    defaultTheme: {
        id: 'defaultTheme',
        primaryColor: "white",
        secondaryColor: "black"
    },
    darkTheme: {
        id: 'darkTheme',
        primaryColor: "black",
        secondaryColor: "white"
    }
}
export interface ITheme {
    defaultTheme: ThemeType,
    darkTheme: ThemeType
}

export type ThemeType = {
    id: string,
    primaryColor: string,
    secondaryColor: string
}