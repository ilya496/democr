import $api from "./Axios";

export const handleLogoutApi = async () => {
  const res = await $api.post("/auth/logout");
  return res;
};

export const handleFetchingNewsApi = async () => {
  const res = await $api.get("/news/all");
  return res;
};

export const handlePublishingNewsApi = async (article) => {
  const res = await $api.post("/news/public", article);
  return res;
};
