import axios from 'axios';
const KEY = "AIzaSyDX29eRmHKKZsbGcFpx2cvpa47VniHIN68";

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResults:5,
        key : KEY
    }

});