const blogData = [
  {
    id: 1,
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/671367d3b8e666f9944bed28_rodeo-project-management-software-b2L3f7ednYE-unsplash.png",
    title: "The Construction Process",
    description:
      "At NextGen Properties, we handle every detail of your custom...",
  },
  {
    id: 2,
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/67135ea47f4e2d671ac3a52b_pexels-steffen-coonan-1005786-2098624.webp",
    title: "The Construction Process",
    description:
      "At NextGen Properties, we handle every detail of your custom...",
  },
  {
    id: 3,
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6713633a8d504582646c3c32_seo-galaxy-zZ7J5qri6qY-unsplash.webp",
    title: "The Construction Process",
    description:
      "At NextGen Properties, we handle every detail of your custom...",
  },
  {
    id: 4,
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6713633a8d504582646c3c32_seo-galaxy-zZ7J5qri6qY-unsplash.webp",
    title: "The Construction Process",
    description:
      "At NextGen Properties, we handle every detail of your custom...",
  },
  {
    id: 5,
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/671367d3b8e666f9944bed28_rodeo-project-management-software-b2L3f7ednYE-unsplash.png",
    title: "The Construction Process",
    description:
      "At NextGen Properties, we handle every detail of your custom...",
  },
  {
    id: 6,
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/67135ea47f4e2d671ac3a52b_pexels-steffen-coonan-1005786-2098624.webp",
    title: "The Construction Process",
    description:
      "At NextGen Properties, we handle every detail of your custom...",
  },
  {
    id: 7,
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6713633a8d504582646c3c32_seo-galaxy-zZ7J5qri6qY-unsplash.webp",
    title: "The Construction Process",
    description:
      "At NextGen Properties, we handle every detail of your custom...",
  },
  {
    id: 8,
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6713633a8d504582646c3c32_seo-galaxy-zZ7J5qri6qY-unsplash.webp",
    title: "The Construction Process",
    description:
      "At NextGen Properties, we handle every detail of your custom...",
  },
  {
    id: 9,
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6713633a8d504582646c3c32_seo-galaxy-zZ7J5qri6qY-unsplash.webp",
    title: "The Construction Process",
    description:
      "At NextGen Properties, we handle every detail of your custom...",
  },
  {
    id: 10,
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6713633a8d504582646c3c32_seo-galaxy-zZ7J5qri6qY-unsplash.webp",
    title: "The Construction Process",
    description:
      "At NextGen Properties, we handle every detail of your custom...",
  },
];
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OurBlogs = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  // Calculate current blogs to show
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogData.slice(indexOfFirstBlog, indexOfLastBlog);

  // Handle pagination
  const totalPages = Math.ceil(blogData.length / blogsPerPage);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <div className="container mx-auto px-2 sm:py-16 sm:px-2 md:py-16 lg:py-2">
        <div className="container flex-col items-center flex pb-6  ">
          <h1 className="text-4xl sm:text-4xl md:text-5xl font-medium text-gray-800">
            Our Blogs
          </h1>
          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-6 gap-6 sm:p-4">
            {currentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="card card-compact bg-base-100 w-full shadow-xl shadow-gray-300 p-2 hover:shadow-gray-400"
              >
                <figure className="p-2">
                  <img
                    src={blog.image}
                    alt={blog.title || "Blog image"}
                    className="w-full rounded-lg object-cover h-72"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <p>{blog.description}</p>
                  <div className="card-actions justify-start">
                    <button className="px-4 py-3 rounded-lg text-white bg-blue-600">
                      Check Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`px-4 py-2 mx-1 rounded-full ${
                  currentPage === index + 1
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {pathname === "/blog" ? null : (
            <div className="container mt-3 flex items-center justify-center">
              <button
                onClick={() => navigate("/blog")}
                className="border text-center transition bg-blue-600 text-white border-blue-600 hover:text-blue-600 duration-300 px-16 py-2 rounded-full shadow-md hover:bg-white"
              >
                View all
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default OurBlogs;
