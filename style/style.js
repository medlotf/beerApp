const beerColor = "#5a2006";
const blueColor = "#c2d3dd";
const black = "#000";
export default {
  black: black,
  beerColor: beerColor,
  blueColor: blueColor,
  header: {
    backgroundColor: blueColor
  },
  headerTitle: {
    color: black
  },
  background: {
    flex: 1,
    alignItems: 'center'
  },
  textHome: {
    fontSize: 28,
    position: 'absolute',
    top: 100,
    fontWeight: 'bold',
    color: beerColor
  },
  container: {
    margin: 25
  },
  textInput: {
    borderWidth: 1,
    borderColor: black,
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 50,
    marginBottom: 20,
    fontSize: 20
  },
  imageItem: {
    width: 350,
    height: 300,
    borderRadius: 10
  },
  infoBeer: {
    marginTop: 20,
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: blueColor
  },
  txtInfo: {
    fontWeight: 'bold',
    fontSize: 18,
    color: beerColor
  },
  margBot: {
    marginBottom: 10
  },
  flex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  infoItem: {
    backgroundColor: blueColor,
    marginTop: 30,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}