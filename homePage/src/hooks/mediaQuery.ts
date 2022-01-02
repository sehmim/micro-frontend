import { useMediaQuery } from 'react-responsive'

const Device = {
    DesktopOrLaptop: '(min-width: 992px)',
    Tablet: '(max-width: 991px)',
    Mobile: '(max-width: 550px)',
    Portrait: '(orientation: portrait)',
    Retina: '(min-resolution: 2dppx)'
}

export const useAppMediaQuery = () => {
    const isDesktopOrLaptop = useMediaQuery({ query: Device.DesktopOrLaptop })
    const isTablet = useMediaQuery({ query: Device.Tablet })
    const isMobile = useMediaQuery({ query: Device.Mobile })
    const isPortrait = useMediaQuery({ query: Device.Portrait })
    const isRetina = useMediaQuery({ query: Device.Retina })

    return {
        isDesktopOrLaptop,
        isTablet,
        isMobile,
        isPortrait,
        isRetina
    }
}

export { useAppMediaQuery as useMediaQuery }