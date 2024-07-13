const VideoModal = ({ isOpen, closeModal, videoUrl }) => {
  return (
    <>
      {isOpen && (
        <div className="relative top-0 left-0">
          <div
            onClick={closeModal}
            className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-30 z-50 cursor-pointer"
          ></div>
          <div className="fixed top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-50 text-white">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/K4TOrB7at0Y?si=r6z5RppUihXvU6KP"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoModal;
