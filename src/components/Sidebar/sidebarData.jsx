import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@material-ui/icons/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@material-ui/icons/HistoryOutlined";
import QueuePlayNextSharpIcon from "@material-ui/icons/QueuePlayNextSharp";
import QueryBuilderOutlinedIcon from "@material-ui/icons/QueryBuilderOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import YouTubeIcon from "@material-ui/icons/YouTube";
import VideogameAssetOutlinedIcon from "@material-ui/icons/VideogameAssetOutlined";
import SettingsInputAntennaIcon from "@material-ui/icons/SettingsInputAntenna";
import SportsHandballOutlinedIcon from "@material-ui/icons/SportsHandballOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import FeedbackOutlinedIcon from "@material-ui/icons/FeedbackOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";

const YouTubeShortsIcon = () => {
  return (
    <img
      style={{ height: "20px", width: "20px", margin: "2px" }}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Youtube_shorts_icon.svg/800px-Youtube_shorts_icon.svg.png"
      alt="YouTube Shorts"
    />
  );
};

export const sideBarShowMore = [
  { Icon: ExpandMoreOutlinedIcon, text: "Show more" },
];

export const sideBarShowLess = [
  { Icon: ExpandLessOutlinedIcon, text: "Show less" },
];

export const sideBarMenuRows = [
  { Icon: HomeSharpIcon, text: "Home" },
  { Icon: ExploreOutlinedIcon, text: "Explore" },
  { Icon: YouTubeShortsIcon, text: "Shorts" },
  { Icon: SubscriptionsOutlinedIcon, text: "Subscriptions" },
  { Icon: VideoLibraryOutlinedIcon, text: "Library" },
  { Icon: HistoryOutlinedIcon, text: "History" },
  { Icon: QueuePlayNextSharpIcon, text: "Your videos" },
  { Icon: QueryBuilderOutlinedIcon, text: "Watch later" },
  { Icon: ThumbUpAltOutlinedIcon, text: "Liked videos" },
];

export const moreFromYouTubeRows = [
  { Icon: YouTubeIcon, text: "YouTube Premium" },
  { Icon: VideogameAssetOutlinedIcon, text: "Gaming" },
  { Icon: SettingsInputAntennaIcon, text: "Live" },
  { Icon: SportsHandballOutlinedIcon, text: "Sport" },
  { Icon: SettingsOutlinedIcon, text: "Settings" },
  { Icon: FlagOutlinedIcon, text: "Report history" },
  { Icon: HelpOutlineOutlinedIcon, text: "Help" },
  { Icon: FeedbackOutlinedIcon, text: "Send feedback" },
];

// mobile footer uses the same array
export const miniSidebarRows = [
  { Icon: HomeSharpIcon, text: "Home" },
  { Icon: YouTubeShortsIcon, text: "Shorts" },
  { Icon: SubscriptionsOutlinedIcon, text: "Subscriptions" },
  { Icon: VideoLibraryOutlinedIcon, text: "Library" },
];
