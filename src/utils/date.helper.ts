import dayjs from "dayjs";

export const formatTimeAgo = (date: string) => {
  const diff = dayjs(new Date()).unix() - dayjs(date).unix();
  if (diff / 86400 > 7) {
    return dayjs(date).format("YYYY-MM-DD");
  }
  if (diff / 86400 > 1) {
    return (diff / 86400).toFixed(0) + " days ago";
  }
  if (diff / 3600 > 1) {
    return (diff / 3600).toFixed(0) + " hours ago";
  }
  if (diff / 60 > 1) {
    return (diff / 60).toFixed(0) + " minutes ago";
  }
  return "Just now";
};