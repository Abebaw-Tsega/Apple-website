import React, { useEffect, useState } from "react";

function Youtube() {
  const [Youtube, setYoutube] = useState([]);

  useEffect(() => {
    fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=9&order=date&key=AIzaSyA3s4eLjgbOHVwFJvc0Cj3gFrxEkCW0w1E"
    )
      .then((res) => res.json())
      .then((data) => {
        setYoutube(data.items);
      });
  }, []);

  // console.log(Youtube);

  return (
    <section youtubeVideosWrapper>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12">
              <div className="title-wrapper">
                <br />
                <h1>Latest Videos</h1>
                <br />
              </div>
            </div>

            {Youtube?.map((singleVideo, i) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                  <div className="videoThumbnail">
                    <a href= {vidLink} target="_blank" rel="noreferrer">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt="thumbnails"
                      />
                    </a>
                  </div>
                  <div className="videoInfoWrapper">
                    <div className="videoTitle">
                      <a href={vidLink} target="_blank" rel="noreferrer">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="videoDesc">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Youtube;
