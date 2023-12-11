import { Input, Pagination } from "@nextui-org/react";
import Loading from "./components/icons/Loading";
import Details from "./components/Details";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import { useApp } from "./store/useApp";

function App() {
  // * These are state selectors. They are used to select a specific piece of state from the global state.
  const value = useApp((state) => state.search);
  const isLoading = useApp((state) => state.isLoading);
  const totalPages = useApp((state) => state.totalPages);

  // * These are state setters. They are used to update a specific piece of state in the global state.
  const setValue = useApp((state) => state.setSearch);
  const setActivePage = useApp((state) => state.setActivePage);
  const setIsLoading = useApp((state) => state.setIsLoading);
  const setMovies = useApp((state) => state.setMovies);
  const setTotalPages = useApp((state) => state.setTotalPages);

  // ! Read more about Zustand state management here: https://docs.pmnd.rs/zustand/getting-started/introduction

  // * This is an asynchronous function that fetches movies from the OMDB API.
  // * It first sets the isLoading state to true, indicating that the fetch operation has started.
  // ! Then it fetches the data from the API using the provided search string and the API key from the environment variables.
  // * After the data is fetched, it is returned as a JSON object.
  const fetchMovies = async (search: string) => {
    setIsLoading(true);

    const API_KEY = import.meta.env.VITE_API_KEY;

    const res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${search}`
    );

    const data = await res.json();

    return data;
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <Details />

        <Nav />

        <h1 className="text-4xl mb-4 font-geist-bold uppercase">
          Movie search
        </h1>

        <Input
          type="text"
          isClearable={true}
          label="Search movie"
          onClear={() => {
            setValue("");
            setMovies([]);
            setTotalPages(0);
          }}
          placeholder="Your favorite movie"
          description="📌 Search and click on the movie poster to see more details."
          className=" font-geist-regular sm:w-96 w-[300px] mb-4"
          value={value}
          onValueChange={async (value: string) => {
            setValue(value);

            if (value.length === 0) {
              setMovies([]);
              setTotalPages(0);
              return;
            }

            const data = await fetchMovies(value);

            setIsLoading(false);

            if (!data.Search) {
              return;
            }

            setMovies(data.Search);

            setTotalPages(data.Search.length / 5);

            setActivePage(1);
          }}
        />

        <Movies />

        {isLoading ? <Loading className="text-7xl" /> : null}

        <div className="bg-background w-screen fixed bottom-0 z-10 p-4 mt-20">
          <div className="flex justify-center">
            <Pagination
              showControls
              total={totalPages}
              onChange={(page: number) => setActivePage(page)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
