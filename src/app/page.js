'use client';

import React, { useEffect, useState } from "react";

export default function Page() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Liste des posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>Title:</strong> {post.title}<br />
            <strong>Content:</strong> {post.content || "No content"}<br />
            <strong>Published:</strong> {post.published ? "Yes" : "No"}
          </li>
        ))}
      </ul>
    </div>
  );
}
