import { Fragment } from "react";

function Blog() {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center p-10">
        <div className="max-w-screen-md mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">My Blog</h1>
          <p className="text-center mb-8">Welcome to my blog!</p>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-2">Blog Post Title</h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Blog;
