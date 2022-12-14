import {
  Player,
  PlayerConfig,
  AnalyticsConfig,
  UIConfig,
  PlaybackConfig,
  PlayerEvent
} from "bitmovin-player";
import { UIFactory } from "bitmovin-player-ui";
import "bitmovin-player-ui/dist/css/bitmovinplayer-ui.min.css";

const playback: PlaybackConfig = {
  autoplay: true,
  muted: true
};

const analytics: AnalyticsConfig = {
  key: "c8f10c1c-cd50-48a4-aa30-e4d86c9dcc27",
  videoId: "Bitmovin Learning Lab",
  title: "Lets Play Video"
};

const ui: UIConfig = {};

const config: PlayerConfig = {
  key: "142bebf6-edc1-41be-b44f-6a48edd87c11",
  analytics,
  playback,
  ui
};

const source = {
  streamType: "HLS",
  entitlementToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFeHRlcm5hbEF1dGhvcml6YXRpb25zQ29udGV4dERhdGEiOiJNRVgiLCJTdWJzY3JpcHRpb25TdGF0dXMiOiJhY3RpdmUiLCJTdWJzY3JpYmVySWQiOiIxMzg3NDUwMzciLCJGaXJzdE5hbWUiOiJEYXZpZCIsIkxhc3ROYW1lIjoiTW9yYWxlcyIsImV4cCI6MTY2NjcyMDEzNCwiU2Vzc2lvbklkIjoiZXlKaGJHY2lPaUpvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBeEx6QTBMM2h0YkdSemFXY3RiVzl5WlNOb2JXRmpMWE5vWVRJMU5pSXNJblI1Y0NJNklrcFhWQ0lzSW1OMGVTSTZJa3BYVkNKOS5leUppZFNJNklqRXdNREV4SWl3aWMya2lPaUkyTUdFNVlXUTROQzFsT1ROa0xUUTRNR1l0T0RCa05pMWhaak0zTkRrMFpqSmxNaklpTENKb2RIUndPaTh2YzJOb1pXMWhjeTU0Yld4emIyRndMbTl5Wnk5M2N5OHlNREExTHpBMUwybGtaVzUwYVhSNUwyTnNZV2x0Y3k5dVlXMWxhV1JsYm5ScFptbGxjaUk2SWpFek9EYzBOVEF6TnlJc0ltbGtJam9pWXpWbFpEZGtOREF0TWpkalppMDBZelJoTFRnelpUY3RNMlkwTjJRMVlqUmxNek0zSWl3aWRDSTZJakVpTENKc0lqb2laVzR0VlZNaUxDSmtZeUk2SWpNMk5EUWlMQ0poWldRaU9pSXlNREl5TFRFeExUQTBWREUzT2pRNE9qVTBMak16TUZvaUxDSmtkQ0k2SWpFaUxDSmxaQ0k2SWpJd01qSXRNVEV0TWpCVU1UYzZORGc2TlRRdU16TXdXaUlzSW1ObFpDSTZJakl3TWpJdE1UQXRNakpVTVRjNk5EZzZOVFF1TXpNd1dpSXNJbWx3SWpvaU1UYzJMakUxT1M0eU1qY3VPRFFpTENKaklqb2lTRTlWU1V4TVJWTWlMQ0p6ZENJNklqYzRJaXdpY0dNaU9pSTNPRGd3TUNJc0ltTnZJam9pUmxKQklpd2libUptSWpveE5qWTJNemMwTlRNMExDSmxlSEFpT2pFMk5qZzVOalkxTXpRc0ltbHpjeUk2SW1GelkyVnVaRzl1TG5SMklpd2lZWFZrSWpvaVlYTmpaVzVrYjI0dWRIWWlmUS5IeUYzdS1CUlFaZGpBN3pLMlNWWkZueE91eWlZQWEyWXR6Qkc4R01XVmhzIiwiU3Vic2NyaWJlZFByb2R1Y3QiOiJGMSBUViBQcm8gTW9udGhseSIsImp0aSI6IjZmMjRmY2U5LTk5MTgtNDNiMi1iYWZmLTIyNGNiM2FmMGY3OCIsIlN1YnNjcmlwdGlvbiI6IlBSTyIsImlhdCI6MTY2NjM3NDUzNCwiaXNzIjoiRjEifQ.xgMdyWKZow901v62G7hZaVoLI2rWokxD0Uqna4Q50jM",
  dash:
    "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
  hls:
    "https://ott-video-fer-cf.formula1.com/c8059270529e63e492b34317933c3dca/out/v1/2dfd65c3ebe94083ae3e62a920a4077c/33957307c5b848a6bea693bb400a7166/e4d49ef8077f4032a097e2b0c8a962bb/index.m3u8?kid=1042&exp=1666461279&ttl=1440&token=cG49i-sOJynkGkWDefe05GhkSB0UyBq~RscwztdBBvc_",
  progressive:
    "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/MI201109210084_mpeg-4_hd_high_1080p25_10mbits.mp4",
  poster: "https://bitmovin-a.akamaihd.net/content/MI201109210084_1/poster.jpg",
  metadata: {
    ascendontoken:
      "eyJraWQiOiIxIiwidHlwIjoiSldUIiwiYWxnIjoiUlMyNTYifQ.eyJFeHRlcm5hbEF1dGhvcml6YXRpb25zQ29udGV4dERhdGEiOiJNRVgiLCJTdWJzY3JpcHRpb25TdGF0dXMiOiJhY3RpdmUiLCJTdWJzY3JpYmVySWQiOiIxMzg3NDUwMzciLCJGaXJzdE5hbWUiOiJEYXZpZCIsIkxhc3ROYW1lIjoiTW9yYWxlcyIsImV4cCI6MTY2NjcyMDEzNCwiU2Vzc2lvbklkIjoiZXlKaGJHY2lPaUpvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBeEx6QTBMM2h0YkdSemFXY3RiVzl5WlNOb2JXRmpMWE5vWVRJMU5pSXNJblI1Y0NJNklrcFhWQ0lzSW1OMGVTSTZJa3BYVkNKOS5leUppZFNJNklqRXdNREV4SWl3aWMya2lPaUkyTUdFNVlXUTROQzFsT1ROa0xUUTRNR1l0T0RCa05pMWhaak0zTkRrMFpqSmxNaklpTENKb2RIUndPaTh2YzJOb1pXMWhjeTU0Yld4emIyRndMbTl5Wnk5M2N5OHlNREExTHpBMUwybGtaVzUwYVhSNUwyTnNZV2x0Y3k5dVlXMWxhV1JsYm5ScFptbGxjaUk2SWpFek9EYzBOVEF6TnlJc0ltbGtJam9pWXpWbFpEZGtOREF0TWpkalppMDBZelJoTFRnelpUY3RNMlkwTjJRMVlqUmxNek0zSWl3aWRDSTZJakVpTENKc0lqb2laVzR0VlZNaUxDSmtZeUk2SWpNMk5EUWlMQ0poWldRaU9pSXlNREl5TFRFeExUQTBWREUzT2pRNE9qVTBMak16TUZvaUxDSmtkQ0k2SWpFaUxDSmxaQ0k2SWpJd01qSXRNVEV0TWpCVU1UYzZORGc2TlRRdU16TXdXaUlzSW1ObFpDSTZJakl3TWpJdE1UQXRNakpVTVRjNk5EZzZOVFF1TXpNd1dpSXNJbWx3SWpvaU1UYzJMakUxT1M0eU1qY3VPRFFpTENKaklqb2lTRTlWU1V4TVJWTWlMQ0p6ZENJNklqYzRJaXdpY0dNaU9pSTNPRGd3TUNJc0ltTnZJam9pUmxKQklpd2libUptSWpveE5qWTJNemMwTlRNMExDSmxlSEFpT2pFMk5qZzVOalkxTXpRc0ltbHpjeUk2SW1GelkyVnVaRzl1TG5SMklpd2lZWFZrSWpvaVlYTmpaVzVrYjI0dWRIWWlmUS5IeUYzdS1CUlFaZGpBN3pLMlNWWkZueE91eWlZQWEyWXR6Qkc4R01XVmhzIiwiaWF0IjoxNjY2Mzc0NTM0LCJTdWJzY3JpYmVkUHJvZHVjdCI6IkYxIFRWIFBybyBNb250aGx5IiwianRpIjoiNmYyNGZjZTktOTkxOC00M2IyLWJhZmYtMjI0Y2IzYWYwZjc4In0.hP-IoIlQAqa2sAcfJJhVpULrjYAkNARRvDMIUx7FVuuf43U0-j9pfZFq4k-LcTp2FI9NfN3T5-DWzXrm5pPbnQyCX1RSy-gKBbvYl9pDeXZLC2CqKKKxIEfuYVQqANCbR_-3P0j6jgB-jw8kO51bvD6EC1zCD2UIhYUipYMRZ87_FtIzU8vDAxC83-u6-JxsGv8A3_ax0ShQC-USofpwJV1nwI_eGoMaugVVDI_73VOeKI9xolyPR6imuMZbxHqW_r6uahNCLC4JsSwA12hfrjHjKkt1vPsdQYGF0Q5hd-bfVljAlbHO55Kd3xURSdQ3VbTc3mRi0XqHn0lRR9yWig",
    requestChannel: "WEB_HLS",
    contentId: 1000005602
  }
};

const container = document.getElementById("player")!;
const player = new Player(container, config);
const uiManager = UIFactory.buildDefaultUI(player);

player.on(PlayerEvent.Destroy, () => {
  uiManager.release();
});

const loadPromise = player.load(source);
console.log("???? Source started loading");

loadPromise
  .then(() => {
    console.log("??? Source successfully loaded");
  })
  .catch((error) => {
    console.error("??? Cannot load because of ", error);
  });
