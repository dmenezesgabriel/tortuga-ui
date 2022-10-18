const useShare = (title: string, text: string, url: string) => {
  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: url,
    });
  } else {
    navigator.clipboard.writeText(url);
  }
};

export default useShare;
