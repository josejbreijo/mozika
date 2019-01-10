type Entity = "tracks" | "artists";

const apiBase = "https://api.spotify.com/v1";

const fetchSpotifyAPI = (api: string) => {
  const token = window.sessionStorage.getItem("token");
  return fetch(`${apiBase}/${api}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};

const SpotifySDK = {
  setToken: (token: string) => {
    return new Promise(resolve => {
      sessionStorage.setItem("token", token);
      resolve();
    });
  },
  getUser: async () => {
    const response = await fetchSpotifyAPI("me");
    return await response.json();
  },
  getTopTracks: async (entity: Entity) => {
    const response = await fetchSpotifyAPI(`me/top/${entity}?limit=50`);
    return await response.json();
  }
};

export default SpotifySDK;