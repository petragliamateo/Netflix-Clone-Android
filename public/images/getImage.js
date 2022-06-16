export default function getImage(type = 'films', genre = 'drama', name = 'fight-club', size = 'large') {
  return `https://github.com/karlhadwen/netflix/blob/master/public/images/${type}/${genre}/${name}/${size}.jpg?raw=true`;
}
