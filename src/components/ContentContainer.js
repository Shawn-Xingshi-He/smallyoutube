import anime from "animejs/lib/anime.es.js";
import VideoCard from "./VideoCard";

anime({
  targets: ".staggering-grid-demo",
  scale: [
    { value: 0.1, easing: "easeOutSine", duration: 500 },
    { value: 1, easing: "easeInOutQuad", duration: 1200 },
  ],
  delay: anime.stagger(200, { grid: [5, 5], from: "center" }),
  // loop: true,
});

function ContentContainer({ data }) {
  return (
    <div>
      {data.map((video) => {
        console.log(video);
        return <VideoCard key={video.id.videoId} videoInfo={video} />;
      })}
    </div>
  );
}

export default ContentContainer;
