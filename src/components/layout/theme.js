import { createMuiTheme } from '@material-ui/core/styles'
import SFProDisplayRegular from 'assets/fonts/SFProDisplay-Regular.woff2'
import SFProDisplaySemiBold from 'assets/fonts/SFProDisplay-Semibold.woff2'
import SFProDisplayBold from 'assets/fonts/SFProDisplay-Bold.woff2'

const SFProRegular = {
    fontFamily: 'SFProDisplay-Regular',
    fontStyle: 'normal',
    fontWeight: 500,
    fontDisplay:'swap',
    src: `
      local('SFProDisplay-Regular'),
      local('SFProDisplay-Regular'),
      url(${SFProDisplayRegular}) format('woff2')
    `,
    unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const SFProSemibold = {
    fontFamily: 'SFProDisplay-Semibold',
    fontStyle: 'normal',
    fontWeight: 600,
    fontDisplay:'swap',
    src: `
      local('SFProDisplay-Semibold'),
      local('SFProDisplay-Semibold'),
      url(${SFProDisplaySemiBold}) format('woff2')
    `,
    unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const SFProBold = {
    fontFamily: 'SFProDisplay-Bold',
    fontStyle: 'normal',
    fontWeight: 700,
    fontDisplay:'swap',
    src: `
      local('SFProDisplay-Bold'),
      local('SFProDisplay-Bold'),
      url(${SFProDisplayBold}) format('woff2')
    `,
    unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const theme = createMuiTheme({
    breakpoints:{
        //
    },
    palette:{
        primary:{
            main: '#8BC34A',
            dark: '#689F38',
        },
        secondary:{
            // main:'#FF5722',
            main:'#FF5722',
        },
        appBackground:{
            main:'#F8F8F8'
        },
        bottomNav:{
            background:'#FAFAFA',
            inactive:'#737373'
        }
    },
    typography:{
        fontFamily:['SFProDisplay-Regular', 'SFProDisplay-Regular', 'SFProDisplay-Semibold'].join(','),
        h1:{
            fontFamily:'SFProDisplay-Bold',
            fontSize:28,
            lineHeight:'33.41px'
        },
        h2:{
            fontFamily:'SFProDisplay-Semibold',
            fontSize:24,
            lineHeight:'24px'
        },
        h3:{
            fontFamily:'SFProDisplay-Semibold',
            fontSize:20,
            lineHeight:'23.87px'
        },
        body2:{
            fontFamily:'SFProDisplay-Regular',
            fontSize:14,
            lineHeight:'16px'

        }
    },
    overrides:{
        MuiCssBaseline:{
            '@global': {
                '@font-face': [SFProRegular, SFProBold, SFProSemibold],
              },
        }
    }
})

export default theme