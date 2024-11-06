const BlogPreviewCard = () => {
  return (
    <div className="h-screen flex justify-center items-center bg-[#F6D050]">
      <div className="w-96 flex flex-col bg-[#FFFFFF] p-6 rounded-xl border border-black">
        <div className="bg-[#F6D050] rounded-xl h-52 mb-4"></div>
        <div className="w-max text-sm font-extrabold px-2 py-1 bg-[#F6D050] rounded-md">
          Learning
        </div>
        <div className="text-sm font-medium my-4">Published 21 Dec 2023</div>
        <div className="text-xl font-extrabold mb-2">
          HTML & CSS foundations
        </div>
        <div className="my-2 text-black/70">
          <p>
            These languages are the backbone of every website, defining
            structure, content and presentation.
          </p>
        </div>
        <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-[#F6D050]"></div>
          <div className="text-sm font-bold">Greg Hooper</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPreviewCard;
