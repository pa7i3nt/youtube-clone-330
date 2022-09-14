import PlaylistPlayOutlinedIcon from "@material-ui/icons/PlaylistPlayOutlined";
import { SidebarRow } from "./SidebarRow";

export const SidebarTopMenuSection3 = () => {
  return fishPlaylist.map((playlist) => {
    return (
      <SidebarRow
        key={playlist}
        Icon={PlaylistPlayOutlinedIcon}
        text={playlist}
      />
    );
  });
};

const fishPlaylist = [
  "Everything",
  "Dev",
  "Fish' Radio",
  "CS:GO",
  "Bro's Music",
  "Chill",
  "Lofi type beat",
  "Good Old Days",
  "English",
  "SURF'N CHILL",
  "asdfmovie",
  "Takraw",
  "Oldskull",
  "Can You Solve This Riddle?",
  "Very long long long long long long text",
];
