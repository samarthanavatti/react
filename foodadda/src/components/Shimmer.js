const Shimmer = () => {
  return (
    <div className=" mt-5 mx-10 flex gap-5 flex-wrap justify-start">
      {Array(15)
        .fill('')
        .map((shimmer, index) => (
          <div
            key={index}
            className="w-40 h-52 border-2 animate-pulse bg-gray-50"
          >
            <div className="p-2">
              <div class="h-28 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="h-[10%] bg-slate-200 rounded"></div>
                <div class="grid h-[40%] grid-rows-3 gap-4">
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                  <div class="h-2 bg-slate-200 rounded col-span-1"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;