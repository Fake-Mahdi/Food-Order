export const TBDM_CONFIG = {
    BASE_URL :`https://api.themoviedb.org/3`,
    API_KEY : process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers : {
        accept : 'application/json',
        Authorization : `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    },
    POPULAR_URL : 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'

}

export const fetchMovies = async({query}) =>
{
    const main_query = query ?
    `${TBDM_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    :`${TBDM_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`
    
    try{
        const response = await fetch(main_query, {
        method : 'GET',
        headers : TBDM_CONFIG.headers,
    })
    if(!response.ok)
    {
        throw new Error(`Failed to fetch movies: ${response.statusText}`);
    }
    const data = await response.json()
    return data;
    }
    catch(error)
    {
        console.log(error)
        return[]
    }

}

export const popularMovies = async () =>
{
    try {
        
        const response = await fetch(TBDM_CONFIG.POPULAR_URL ,{
            method : "GET",
            headers : TBDM_CONFIG.headers
        })
        if(!response.ok)
        {
            throw new Error(`Failed to fetch movies: ${response.statusText}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
        return[]
    }
}