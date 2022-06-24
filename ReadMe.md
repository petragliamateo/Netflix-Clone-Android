# Netflix-clone-app

Clone of Netflix mobile app

react-native, firebase, firestore.

### Functionalities:

Sing Up:

Sign In:

Sign Out:

Database in Firestore:
  Al principio creé una database con algunas películas y series, que incluyen su título, descripción y género.
  Luego hice un hook personalizado para llamar los datos de esta database cada vez que la quiera usar.
  Para llamar los datos uso: {db}.firestore().collection({'series'/'films'}).get().then({cargo los datos}).catch({display error})

LoadingScreen:
  La pantalla de carga se presenta cuando se está cargando los datos de Firebase Authentication.

Search:
  En la página search se encuentra la lista de todos los items, ordenados de forma random.
  El componente de busqueda utilza un algoritmo simple, que encuentra los matches entre lo que se escribe y el título, genero, o tipo de elemento entre de los items.

Users:
  Uso el context profile como el perfil actual en el que se está.
  User es el usuario completo creado mediante firebase: firebase.auth().currentUser
