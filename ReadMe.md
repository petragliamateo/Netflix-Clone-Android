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

addUser:
  Se puede añadir hasta 6 usuarios, al presionar añadir usuario le pedira nombre y foto de perfil.

editUser:
  Se puede editar y eliminar usuarios apretando en el boton de edit, en la página de usuarios.

ProfileSetup:
  Opciones varias donde se puede cambiar de usuario, ir a usuarios o cerrar sesión -> SignOut.
  -> myList:

-->Error when add user.

Descargar APK:
  [Descargar](https://expo.dev/artifacts/60d41dfa-8c3a-44d1-b5eb-c8ad12ba218e)
