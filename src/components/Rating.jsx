import { useState } from 'react'

const Rating = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedRating, setSelectedRating] = useState(null)

  const handleSubmission = () => {
    setIsSubmitted(true)
  }

  return (
    <div className="bg-[#141518]">
      <div
        className="flex h-screen items-center justify-center"
        style={{ fontFamily: 'Overpass, sans-serif' }}
      >
        <div className="w-96 rounded-3xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#252d37] to-[#181E28] p-8">
          {!isSubmitted ? (
            <RatingSelector selectedRating={selectedRating} />
          ) : (
            <RatingSubmit selectedRating={selectedRating} />
          )}
        </div>
      </div>
    </div>
  )

  function RatingSubmit({ selectedRating }) {
    return (
      <>
        <div className="flex flex-col items-center justify-center">
          <div>
            <img src="src/assets/illustration-thank-you.svg" />
          </div>
          <div className="mb-4 mt-6 flex items-center justify-center rounded-full bg-[#252d37] px-4">
            <div className="py-2 text-sm text-[#fb7413]">
              You selected {selectedRating} out of 5
            </div>
          </div>
          <div className="py-3 pt-5 text-2xl font-medium text-white">
            Thank you!
          </div>
          <div className="text-center text-sm leading-6 text-[#959eac]">
            <p>
              We appreciate you taking the time to give a rating. If you ever
              need more support, don't hesitate to get in touch!
            </p>
          </div>
        </div>
      </>
    )
  }

  function RatingSelector({ selectedRating }) {
    return (
      <>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#252d37]">
          <img src="src/assets/icon-star.svg" width={15} />
        </div>
        <div className="mt-5 py-3 text-2xl font-medium text-white">
          How did we do?
        </div>
        <div className="text-sm leading-6 text-[#959eac]">
          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        {/* TODO: Refactor the Code */}
        <div className="flex justify-center gap-5 py-4">
          {[1, 2, 3, 4, 5].map((ratingValue, index) => (
            <input
              key={index}
              type="button"
              className={`flex h-12 w-12 items-center justify-center rounded-full ${selectedRating === ratingValue ? `bg-white text-[#252d37]`: `bg-[#252d37] text-[#959eac]` } text-sm font-semibold hover:cursor-pointer hover:bg-[#fb7413] hover:text-[#252d37]`}
              value={ratingValue}
              onClick={() => {
                setSelectedRating(ratingValue)
              }}
            />
          ))}
        </div>
        <button
          onClick={handleSubmission}
          className="flex w-full justify-center rounded-full bg-[#fb7413] p-2 text-sm font-semibold hover:bg-white hover:text-[#252d37]"
        >
          SUBMIT
        </button>
      </>
    )
  }
}

export default Rating
