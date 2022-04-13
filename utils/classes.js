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
    marginTop: 5,
    marginBottom: 1,
    textAlign: 'center',
  },
  appbar: {
    backgroundColor: '#fcb762',
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
    marginRight: 3,
    fontSize: '1.2rem',
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
    fontSize: '1.5rem',
    marginTop: 4,
    textAlign: 'center'
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
    backgroundColor: '#f8c040',
    padding: 1,
    borderRadius: '0 5px 5px 0',
    '& span': {
      color: '#000000',
    },
  },
};

export default classes;
