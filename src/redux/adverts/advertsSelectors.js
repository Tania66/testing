export const selectAdverts = (state) => state.adverts.items;
export const selectIsLoading = (state) => state.adverts.loading;

// export const selectAdvert = (state) => state.advertId.item;
export const selectFavoriteAdverts = (state) => state.favorite.favorite;
export const selectFavoriteLoad = (state) => state.favorite.isLoading;
export const selectedIsFavorite = (state) => state.favorite.isFavorite;
