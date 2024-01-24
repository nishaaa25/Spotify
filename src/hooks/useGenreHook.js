import { useEffect, useState } from 'react'
import { GENRE_URL, options } from '../Constant';

const useGenreHook = () => {
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        fetchGenre();
      }, [])

    const fetchGenre = async() =>{
        const data = await fetch(GENRE_URL, options);
        const json = await data.json();
        setGenre(json?.content?.items);
    }
    return genre;
}

export default useGenreHook
