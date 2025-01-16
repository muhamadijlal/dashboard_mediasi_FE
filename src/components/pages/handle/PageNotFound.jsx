import NotFoundImg from "@assets/404.gif";

function PageNotFound() {
  return (
    // <div className="grid h-screen place-content-center place-items-center overflow-hidden bg-white text-center text-2xl font-bold">
    //   <img
    //     src={NotFoundImg}
    //     alt="PageNotFound"
    //     className="h-full w-full object-cover"
    //   />
    // </div>
    <>
      <div className="grid h-screen place-content-center place-items-center overflow-hidden bg-white text-center text-2xl font-bold">
        <h1 className="text-[300px] text-base-300">
          404
          <h4 className="h-10" />
          <span className="text-2xl">Page Not Found</span>
        </h1>
      </div>
    </>
  );
}

export default PageNotFound;
