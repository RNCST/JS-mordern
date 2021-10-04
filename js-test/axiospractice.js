const OMDB_API_KEY = '7035c60cawd'
function fetchMovies(title) {
    return new Promise(async (resolve,reject) => {
      try{
        const res = await axios.get(`https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`)
      resolve(res)
      }catch (e){
        console.log(e);
        console.log(e.message)
        reject('error')
      }
    })
}

async function test() {
  try {
    const res = await fetchMovies('frozen')
  console.log(res);
  } catch (error) {
    console.log(error);
  }
  
}

function test2() {
    fetchMovies('jobs')
    .then(res => console.log(res))
    .catch(error => { console.log(error);})
}

test();

test2();