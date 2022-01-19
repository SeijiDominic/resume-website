import { useState, useEffect } from 'react';

function useMediaQuery(query) {
    let [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        const media = window.matchMedia(query);
        media.onchange = () => {
            setMatches(media.matches);
        }
    }, [ query, matches ]);

    return matches;
}


export default useMediaQuery;

