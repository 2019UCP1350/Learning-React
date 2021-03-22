import axios from 'axios';

const Axios=axios.create({
	baseURL:"https://api.themoviedb.org/3/person/500?api_key=7372ae765660f35a9b2e71883bb705a5&language=en-US",
});

export default Axios;