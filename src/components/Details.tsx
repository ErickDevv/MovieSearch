import getMovieDetails from "../functions/getMovieDetails";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { useDetails } from "../store/useDetails";

// * 'MovieType' is a interface that defines the structure of a movie object.
import MovieType from "../types/Movie";

// * 'RatingType' is a type that defines the structure of a rating object.
import RatingType from "../types/Rating";

import { useEffect, useState } from "react";

const Details = () => {
  // *  Initialize a state variable 'movie' with an empty object of type 'MovieType'.
  // *  'setMovie' is the function to update the 'movie' state.
  const [movie, setMovie] = useState<MovieType>({} as MovieType);

  // *  'useDetails' is a custom hook. Here it's used to access the 'showDetails' state from the global state.
  // *  'showDetails' is likely a boolean indicating whether the details should be shown or not.
  const showDetails = useDetails((state) => state.showDetails);

  // *  'toggleDetails' is a function from the global state used to toggle the 'showDetails' state.
  const toggleDetails = useDetails((state) => state.toggleDetails);

  //*  'title' is a state variable from the global state likely representing the title of the movie.
  const title = useDetails((state) => state.title);

  useEffect(() => {
    if (!title) {
      return;
    }
    getMovieDetails(title).then((data) => {
      setMovie(data);
    });
  }, [title]);

  return (
    <div className="flex flex-col items-center justify-center">
      <Modal isOpen={showDetails} onClose={toggleDetails}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-geist-regular text-2xl">
                <h1>
                  {title} - {movie.Year}
                </h1>
              </ModalHeader>
              <ModalBody>
                <h3 className="text-xl"> 🎬 {movie.Genre}</h3>

                <h3>
                  Rated:{" "}
                  <label className="text-sm font-geist-regular text-red-500">
                    {movie.Rated}
                  </label>
                </h3>

                <h2 className="text-xl">{movie.Plot}</h2>

                <div className="flex flex-col justify-center gap-2 mt-4">
                  <h3 className="text-xl">🏆Ratings</h3>
                  {movie.Ratings?.map((rating: RatingType) => (
                    <div className="flex flex-col justify-center gap-1">
                      <h4 className="text-lg">
                        → {rating.Source} -{" "}
                        <label className="text-sm font-geist-regular text-red-500">
                          {rating.Value}
                        </label>
                      </h4>
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Details;
