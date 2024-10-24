
import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getTvShows: build.query<TV.GetResponse, TV.GetRequest>({
      query: ({ genre, sort }) => ({
        url: `/discover/tv`,
        method: "GET",
        params: {
          with_genres: genre,
          sort_by: sort,
        },
      }),
      providesTags: ["tv"],
    }),
  }),
});

export const { useGetTvShowsQuery } = api;
