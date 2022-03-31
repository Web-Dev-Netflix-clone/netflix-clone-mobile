import { ImageBackground } from "react-native";
import React, { useCallback, useRef } from "react";
import Animated, { BounceIn, Easing, Layout } from "react-native-reanimated";
import YoutubePlayer, { YoutubeIframeRef } from "react-native-youtube-iframe";
import { IMGSTYLES } from "../global/styles/imgStyles";
import Octicons from "@expo/vector-icons/Octicons";

interface ICustomYoutubePlayer {
  isMute?: boolean;
  setIsMute: (bool: any) => void;
  setPlaying: (bool: any) => void;
  playing?: boolean;
  showVideo: number;
  videoHeight: number;
}

const CustomYoutubePlayer = ({
  setIsMute,
  isMute,
  setPlaying,
  playing,
  showVideo,
  videoHeight,
}: ICustomYoutubePlayer) => {
  const controlRef = useRef<YoutubeIframeRef>(null);

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      controlRef.current?.seekTo(6.5, true);
      setPlaying(true);
      setIsMute(false);
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev: any) => !prev);
  }, []);

  const seekBackAndForth = (control: string) => {
    console.log("currentTime");
    controlRef.current?.getCurrentTime().then((currentTime) => {
      control === "forward"
        ? controlRef.current?.seekTo(currentTime + 15, true)
        : controlRef.current?.seekTo(currentTime - 15, true);
    });
  };

  const muteVideo = () => {
    setIsMute(!isMute);
  };

  return (
    <>
      <Animated.View
        entering={BounceIn}
        layout={Layout.easing(Easing.ease).delay(3000)}
        style={{
          height: 350,
          backgroundColor: "#000",
          zIndex: -1,
        }}
        pointerEvents="none"
      >
        {showVideo < 0 && (
          <ImageBackground
            source={require("../../assets/background-images/netflix-screen.png")}
            style={IMGSTYLES.responsive}
          />
        )}

        <YoutubePlayer
          webViewStyle={{
            marginTop: showVideo,
          }}
          height={videoHeight}
          contentScale={1}
          ref={controlRef}
          play={playing}
          mute={isMute}
          videoId={"JfVOs4VSpmA"}
          onChangeState={onStateChange}
          initialPlayerParams={{
            loop: true,
            controls: false,
            modestbranding: false,
            showClosedCaptions: false,
            start: 0,
            rel: false,
          }}
          forceAndroidAutoplay={true}
        />
      </Animated.View>
      {showVideo > 0 && (
        <Octicons
          style={{ position: "absolute", top: 265, right: 10 }}
          name={isMute ? "unmute" : "mute"}
          size={15}
          color="white"
          onPress={muteVideo}
        />
      )}
    </>
  );
};

export default CustomYoutubePlayer;
