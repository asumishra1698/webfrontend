import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout";
import { useDispatch, useSelector } from "react-redux";
import { getPostBySlugRequest } from "../../redux/actions/blogActions";
import { RootState } from "../../redux/store";
import { MEDIA_URL } from "../../config/webRoutes";

// Define the Post type for type safety
type Post = {
  _id: string;
  title: string;
  slug: string;
  description: string;
  author?: {
    _id: string;
    name: string;
    email: string;
  };
  category?: string | null;
  tags?: string[];
  featuredImage?: string;
  galleryImages?: string[];
  metaTitle?: string;
  metaDescription?: string;
  canonicalUrl?: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
};

export default function BlogDetails() {
  const { slug } = useParams<{ slug: string }>();
  const dispatch = useDispatch();
  const { blog, loading, error } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    if (slug) {
      dispatch(getPostBySlugRequest(slug));
    }
  }, [dispatch, slug]);

  return (
    <Layout>
      <div className="bg-gray-50 py-12 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading && <div className="text-center text-lg">Loading...</div>}
          {error && <div className="text-center text-red-600">{error}</div>}
          {!loading && !blog && (
            <div className="text-center text-gray-500 py-10">
              Blog not found.
            </div>
          )}
          {blog && (
            <article className="bg-white rounded-xl shadow-md p-8">
              {blog.featuredImage && (
                <img
                  src={`${MEDIA_URL}${blog.featuredImage}`}
                  alt={blog.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
              )}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {blog.title}
              </h1>
              <div className="flex items-center mb-6">
                <span className="text-gray-700 font-medium">
                  {blog.author?.name || "Admin"}
                </span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-500">
                  {blog.createdAt
                    ? new Date(blog.createdAt).toLocaleDateString()
                    : ""}
                </span>
              </div>
              <div
                className="prose prose-lg max-w-none text-gray-800 mb-8"
                dangerouslySetInnerHTML={{ __html: blog.description || "" }}
              ></div>
              {blog.galleryImages && blog.galleryImages.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Gallery</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {blog.galleryImages.map((img: string, idx: number) => (
                      <img
                        key={idx}
                        src={`${MEDIA_URL}${img}`}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-40 object-cover rounded"
                      />
                    ))}
                  </div>
                </div>
              )}
              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  Meta Title: {blog.metaTitle}
                </p>
                <p className="text-sm text-gray-500">
                  Meta Description: {blog.metaDescription}
                </p>
                <p className="text-sm text-gray-500">
                  Canonical URL:{" "}
                  <a
                    href={blog.canonicalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    {blog.canonicalUrl}
                  </a>
                </p>
              </div>
            </article>
          )}
        </div>
      </div>
    </Layout>
  );
}
