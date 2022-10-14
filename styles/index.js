import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  contener: {
    flex: 1,
    alignItems: "center",
  },
  safe: {
    marginTop: 40,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#4F4C4C',
  },
  input: {
    height: 50,
    width: 300,
    borderRadius: 150,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  multiLineInput: {
    minHeight: 50,
    maxHeight: 150,
    width: 300,
    borderRadius: 10,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    marginBottom: 15,
    marginTop: 10,
    textAlignVertical: 'top',
  },
  labelInput: {
    fontSize: 20,
    fontWeight: "bold"
  },
  labelMultilineInput: {
    fontSize: 20,
    fontWeight: "bold"
  },
  multilineContener: {
    alignItems: "center",
  },
  contConnect: {
    height: 400,
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 5,
    display: 'flex',
  },
  btn: {
    height: 20,
    width: 300,
    backgroundColor: "#007bff",
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  task: {
    width: 300,
    backgroundColor: "#007bff",
    margin: 10,
    paddingVertical: 5
  },
  taskTxt: {
    textAlign: "center"
  },
  colManager: {
    justifyContent: 'center',
    alignItems: 'baseline',
    width: 300,
    height: 50,
    backgroundColor: 'lightgrey'
  },
  colButton: {
    paddingHorizontal: 20,
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5
  },
  centeredView: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "#78BCE3",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalViewTask: {
    margin: 20,
    backgroundColor: "#86B2FD",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  modalTextTask: {
    padding: 15,
    width: 300,
    backgroundColor: '#E4E1FD',
    borderRadius: 3,
  },
  modalTextTaskDesc: {
    marginBottom: 10,
    fontSize: 16
  },
  modalTextTaskTitle: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  colContainer: {
    display: 'flex',
    padding: 20,
    marginBottom: 10,
    borderRadius: 3,
    backgroundColor: '#86B2FD',
    width: 350,
  },
  addColContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
    marginBottom: 10,
    borderRadius: 3,
    backgroundColor: 'lightblue',
    width: 350,
  },
  columnTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  columnTitleCenter: {
    fontWeight: 'bold',
    textAlign: 'center'
  },
  taskContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    marginTop: 20,
    borderRadius: 3,
    backgroundColor: 'white',
    width: '100%',
  },
  addTaskContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    padding: 20,
    marginTop: 20,
    borderRadius: 3,
    backgroundColor: 'white',
    width: '100%',
  },
  listTaskContainer: {
    height: '100%',
    paddingTop: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  plusIcon: {
    width: 16,
    height: 18,
    opacity: 0.5,
  },
  colHeader: {
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  colIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderRadius: 3,
    backgroundColor: 'white',
    marginLeft: 10,
  },
  taskIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderRadius: 3,
    backgroundColor: 'lightgrey',
    marginLeft: 10,
  },
  colIconMenu: {
    flexDirection: "row",
  },
  
})