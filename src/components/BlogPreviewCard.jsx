const BlogPreviewCard = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-[#F6D050]">
      <div className="flex w-96 flex-col rounded-xl border border-black bg-[#FFFFFF] p-6">
        <div className="mb-4 h-52 rounded-xl bg-[#F6D050]"></div>
        <div className="w-max rounded-md bg-[#F6D050] px-2 py-1 text-sm font-extrabold">
          Learning
        </div>
        <div className="my-4 text-sm font-medium">Published 21 Dec 2023</div>
        <div className="mb-2 text-xl font-extrabold">
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
  )
}

export default BlogPreviewCard
