import { create } from "zustand";
import { useAuthStorage } from "./useAuthStorage";
export const usePostStorage = create((set, get) => ({
  posts: [],
  create: async () => {
    const formdata = new FormData();
    formdata.append("content", "hello");
    formdata.append("files", get().filesRef);

    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${useAuthStorage.getState().accessToken}`,
      },
      body: formdata,
    };

    const response = await fetch(
      `${import.meta.env.VITE_BASE_API}/posts`,
      requestOptions
    );
    if (response.ok) {
      console.log("post created");
    } else {
      console.log("error");
    }
  },
  deletePost: async (id) => {
    const response = await fetch(
      `${import.meta.env.VITE_BASE_API}/posts/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${useAuthStorage.getState().accessToken}`,
        },
      }
    );
    if (response.ok) {
      const filteredPosts = get().posts.filter((item) => {
        return item.id != id;
      });
      set({ posts: filteredPosts });
      console.log("deleted");
    } else {
      console.log("error");
    }
  },
  fetch: async () => {
    const response = await fetch(`${import.meta.env.VITE_BASE_API}/posts`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    });
    const json = await response.json();
    set({ posts: json.data });
  },
  filesToUpload: [],
  setFilesToUpload: (files) => set({ filesToUpload: files }),

  filesRef: null,
  setFilesRef: (filesRef) => set({ filesRef }),
}));
