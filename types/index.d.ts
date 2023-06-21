export interface IUserPostTopProps {
  time: string;
  name: string;
  title: string;
  profileImage: string;
}

export interface IUserPostStats {
  votes: string;
  shares: string;
  comments: string;
}

export interface IUserVideoPostProps extends IUserPostTopProps, IUserPostStats {
  postThumbnail: string;
}

export interface IUserImagePostProps extends IUserPostTopProps, IUserPostStats {
  postImage: string;
}
