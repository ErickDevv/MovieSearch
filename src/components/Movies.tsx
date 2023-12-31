import { Image } from "@nextui-org/react";
import { useDetails } from "../store/useDetails";
import initialImage from "../assets/undraw_home_cinema_l7yl.svg";
import { useApp } from "../store/useApp";

const Movies = () => {
  // * The 'useApp' hook to get the 'activePage' state, this is used to get the current active page.
  const activePage = useApp((state) => state.activePage);

  // * If 'isLoading' is true, the 'Loading' component is rendered.
  const isLoading = useApp((state) => state.isLoading);

  // * The 'movies' state is an array of objects of type 'MovieType', it is used to get the movies from the global state.
  const movies = useApp((state) => state.movies);

  // * The 'useDetails' hook to update the 'title', these will be used to get the details of a movie.
  const setTitle = useDetails((state) => state.setTitle);

  // * The 'useDetails' hook to toggle the 'showDetails' state, this is used to show the details of a movie.
  const toggleDetails = useDetails((state) => state.toggleDetails);

  return (
    <>
      {movies.length === 0 && !isLoading ? (
        <img src={initialImage} alt="initial" className="w-[300px] sm:w-96" />
      ) : null}

      {movies.length > 0 ? (
        <>
          <div className="movie flex items-center justify-center flex-wrap gap-4 mt-6 mb-20">
            {movies.map((movie, index) => (
              <>
                {index < 5 * activePage && index >= 5 * (activePage - 1) ? (
                  <div
                    className="flex flex-col items-center justify-center"
                    key={movie.imdbID}
                  >
                    <h3
                      className={`font-geist-bold ${() => {
                        if (movie.Title.length > 20) {
                          return "text-sm";
                        }
                        return "text-lg";
                      }}`}
                    >
                      {movie.Title}
                    </h3>

                    {movie.Poster !== "N/A" ? (
                      <Image
                        isZoomed
                        src={movie.Poster}
                        alt={movie.Title}
                        width={250}
                        height={350}
                        className="sm:w-72 w-[200px]  cursor-pointer"
                        onClick={() => {
                          setTitle(movie.Title);
                          toggleDetails();
                        }}
                      />
                    ) : (
                      <div className="flex items-center justify-center bg-background w-[250px] h-[350px]">
                        <h1 className="text-4xl font-geist-bold text-gray-500">
                          No image
                        </h1>
                      </div>
                    )}
                  </div>
                ) : null}
              </>
            ))}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Movies;
