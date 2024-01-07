export default function setFavorites(favId) {
    return {
        type: `SETFAVMOVIE`,
        payload: favId
    }
}

export function deleteFavorites(deleFavId) {
    return {
        type: `DELETEFAVMOVIE`,
        payload: deleFavId
    }
}
