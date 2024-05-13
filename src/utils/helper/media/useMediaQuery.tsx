import { useState, useEffect } from "react";

/**
 * A custom hook that tracks the state of a CSS media query.
 * @param {string} query - The media query string.
 * @returns {boolean} - True if the media query matches; false otherwise.
 */
function useMediaQuery({ query }: { query: string }): boolean {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches,
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handleChange = () => setMatches(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup function to remove event listener
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}

export default useMediaQuery;
