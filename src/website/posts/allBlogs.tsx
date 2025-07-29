import React, { useEffect } from "react";
import Layout from "../../reuseable/layout";
import { useDispatch, useSelector } from "react-redux";
import { getPostsRequest } from "../../redux/actions/blogActions";
import { RootState } from "../../redux/store";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../config";

export default function Blogs() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    dispatch(getPostsRequest());
  }, [dispatch]);

  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              From the Blog
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Latest news, articles, and resources from our team.
            </p>
          </div>

          {loading && <div className="text-center text-lg">Loading...</div>}
          {error && <div className="text-center text-red-600">{error}</div>}

          <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {posts && posts.length > 0
              ? posts.map((post: any) => (
                  <Link
                    to={`/blog/${post.slug}`}
                    key={post._id}
                    className="block bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <div className="flex flex-col h-full">
                      {post.featuredImage && (
                        <div className="flex-shrink-0">
                          <img
                            className="h-56 w-full object-cover"
                            src={`${BASE_URL}${post.featuredImage}`}
                            alt={post.title}
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-grow">
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 text-sm mb-4 flex-grow">
                          {post.description.substring(0, 120)}...
                        </p>
                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                          <div className="flex items-center">
                            <p className="text-sm font-medium text-gray-800">
                              {post.author?.name || "Admin"}
                            </p>
                          </div>
                          <p className="text-sm text-gray-500">
                            {new Date(post.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              : !loading && (
                  <div className="col-span-3 text-center text-gray-500 py-10">
                    No blogs found.
                  </div>
                )}
          </div>
        </div>
      </div>
    </Layout>
  );
}