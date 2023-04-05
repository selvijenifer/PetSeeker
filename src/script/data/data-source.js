import cats from './cats.js';
class DataSource{
static searchCat(keyword){
  return new Promise((resolve, reject)=>{
  const filteredCats = cats.filter(cat => cat.name.toUpperCase().includes(keyword.toUpperCase()));

  if (filteredCats.length) {
    resolve(filteredCats);
  } else {
    reject(`${keyword} is not found!`);
  }
});
}
}
export default DataSource;