const LATEST_NEWS_COUNT = 3;

const state = {
  news: [],
};

const getters = {
  latest: (state) => () =>
    state.news
      .sort((a, b) => {
        const timestampA = new Date(a.updated_at).getTime();
        const timestampB = new Date(b.updated_at).getTime();
        return (timestampA - timestampB) * -1;
      })
      .slice(0, LATEST_NEWS_COUNT),
};

const actions = {
  fetchLatest({ commit, rootGetters }) {
    fetch("/api/news-feed?limit=3&offset=0", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${rootGetters["user/accessToken"]()}`,
      },
    })
      .then((response) => response.json())
      .then((data) =>
        data.forEach((newsArticle) => commit("add", newsArticle))
      );
  },
};

const mutations = {
  add(state, newsArticle) {
    const id = state.news.findIndex((v) => v.id === newsArticle.id);
    if (id > -1) {
      state.news.splice(id, 1, newsArticle);
    } else {
      state.news.push(newsArticle);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
