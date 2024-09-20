import React from 'react';

const SingleBlogPage = ({params}) => {

  console.log(params)

  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-12">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Post Image */}
        <div className="h-64 md:h-96 overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://via.placeholder.com/1200x600"
            alt="Post featured"
          />
        </div>

        {/* Post Content */}
        <div className="p-6">
          {/* Post Title */}
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            The Beauty of Tailwind CSS
          </h1>

          {/* Author Info */}
          <div className="flex items-center space-x-4 mb-6">
            <img
              className="w-12 h-12 rounded-full object-cover"
              src="https://via.placeholder.com/100"
              alt="Author"
            />
            <div>
              <p className="text-gray-600 font-semibold">John Doe</p>
              <p className="text-gray-400 text-sm">Published on Sep 15, 2024</p>
            </div>
          </div>

          {/* Post Text */}
          <div className="prose prose-lg text-gray-700">
            <p>
              Tailwind CSS has revolutionized the way we style web applications. Its utility-first
              approach allows developers to build complex designs without having to leave the HTML.
              With Tailwind, we can quickly create responsive layouts and beautiful UI components.
            </p>
            <p>
              In this blog post, we'll explore some of the reasons why Tailwind CSS has become so
              popular among developers and why you should consider using it in your next project.
            </p>

            <h2>Why Choose Tailwind CSS?</h2>
            <p>
              Tailwind offers a range of benefits, including simplicity, flexibility, and
              performance. It's easy to customize and integrate with modern JavaScript frameworks.
            </p>
            <blockquote>
              "Tailwind allows us to rapidly build custom designs without leaving our HTML."
            </blockquote>

            <h2>Responsive Design Made Easy</h2>
            <p>
              With its mobile-first approach, Tailwind CSS makes responsive design incredibly
              simple. We can easily add breakpoints and ensure that our design looks great on all
              screen sizes.
            </p>

            <p>Here's an example of how Tailwind's utilities help create a responsive layout:</p>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-auto">
              <code>{`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">...</div>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPage;
