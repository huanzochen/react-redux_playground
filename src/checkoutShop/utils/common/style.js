export const lineClampStyle = (lineClamp = 2) => ({
  overflow: "hidden",
  display: "webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: lineClamp,
});
