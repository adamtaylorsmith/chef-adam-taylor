import { blue } from "@mui/material/colors";

const classes = {
  section: {
    marginTop: 1,
    marginBottom: 1,
  },
  smallText: {
    fontSize: '15px',
  },
  main: {
    marginTop: 2,
    minHeight: '80vh',
    // textAlign: 'center',
  },
  footer: {
    marginTop: 3,
    marginBottom: 1,
    textAlign: 'center',
    // fontSize: '1.9rem',
  },
  // fcb762
  appbar: {
    backgroundColor: '#5e76f9',
    '& a': {
      color: '#ffffff',
      marginLeft: 1,
    },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.4rem',
  },
  extra: {
    marginRight: 4,
    fontSize: '1.2rem',
  },
  notextra: {
    marginRight: 1,
    // marginTop: 18,
    fontSize: '1.1rem',
  },
  navbarButton: {
    color: '#ffffff',
    textTransform: 'initial',
    fontSize: '1.4rem',
    marginBottom: .5,
    marginLeft: 2,
  },
  navbarOther: {
    color: '#ffffff',
    textTransform: 'initial',
    fontSize: '1.4rem',
    marginBottom: .5,
    marginLeft: 3,
  },
  homePage: {
    fontSize: '1.4rem',
    marginBottom: 8,
    textAlign: 'center'
  },
  homePageImgCont: {
    // fontSize: '1.5rem',
    marginTop: 2,
    textAlign: 'center'
  },
  homePageContent: {
    fontSize: '1.2rem',
    marginTop: 2,
    marginLeft: '5%',
    textAlign: 'left',
  },
  homePageExtra: {
    fontSize: '1rem',
    fontStyle: 'italic',
    marginTop: 4,
    marginLeft: '5%',
    textAlign: 'left',
  },
  bodyFrame: {
    marginLeft: '50px',
    marginRight: '10%',
  },
  special: {
    fontSize: '1.1rem',
  },
  shopContent: {
    fontSize: '1.3rem',
    // marginTop: 1,
    marginBottom: 5,
    fontWeight: 400,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center'
  },
  specialLink: {
    color: blue,
  },
  fullWidth: {
    width: '100%',
  },
  sort: {
    marginRight: 1,
  },
  visible: {
    display: 'initial',
  },
  hidden: {
    display: 'none',
  },
  searchForm: {
    border: '1px solid #ffffff',
    backgroundColor: '#ffffff',
    borderRadius: 1,
  },
  searchInput: {
    paddingLeft: 1,
    color: '#000000',
    '& ::placeholder': {
      color: '#606060',
    },
  },
  searchButton: {
    backgroundColor: '#0730fc',
    padding: 1,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
};

export default classes;
