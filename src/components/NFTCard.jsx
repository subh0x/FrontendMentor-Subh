const NFTCard = () => {
  return (
    <div className="bg-[#0E192D]">
      <div className="flex h-screen items-center justify-center">
        <div
          className="flex w-80 flex-col rounded-2xl bg-[#15263F] p-6"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          <div className="group relative h-full w-full">
            <img
              className="absolute left-1/2 top-1/2 z-10 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              src="src/assets/icon-view.svg"
            />
            <div className="absolute inset-0 bg-[#00fff7]/40 opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity duration-300 rounded-xl"></div>
            <img
              className="z-0 h-full w-full rounded-xl"
              src="src/assets/image-equilibrium.jpg"
            />
          </div>
          <div className="py-4 text-lg font-semibold text-white hover:cursor-pointer hover:text-[#00fff7]">
            Equilibrium #3429
          </div>
          <div className="text-[#8BACDA]">
            <p>Our Equilibrium collection promotes balance and calm.</p>
          </div>
          <div className="flex w-full flex-row justify-between py-4">
            <div className="flex flex-row items-center justify-normal space-x-2">
              <div className="">
                <img src="src/assets/icon-ethereum.svg" />
              </div>
              <div className="font-medium text-[#00fff7]">0.041 ETH</div>
            </div>
            <div className="flex flex-row items-center justify-normal space-x-2">
              <div className="">
                <img src="src/assets/icon-clock.svg" />
              </div>
              <div className="text-[#8BACDA]">3 days left</div>
            </div>
          </div>
          <hr class="mb-4 mt-2 h-px rounded-full border-0 bg-[#8BACDA]/20"></hr>
          <div className="flex w-full flex-row items-center space-x-4">
            <img
              className="rounded-full border border-white"
              src="src/assets/image-avatar.png"
              width={30}
            />
            <div className="flex flex-row space-x-1">
              <div className="text-sm text-[#8BACDA]">Creation of</div>
              <div className="text-sm text-white hover:cursor-pointer hover:text-[#00fff7]">
                Jules Wyvern
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTCard
