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

import MovieType from "../types/Movie";
import RatingType from "../types/Rating";

import { useEffect, useState } from "react";

const Details = () => {
  const [movie, setMovie] = useState<MovieType>({} as MovieType);

  const showDetails = useDetails((state) => state.showDetails);
  const toggleDetails = useDetails((state) => state.toggleDetails);
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
