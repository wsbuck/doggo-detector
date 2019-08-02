export const isInWebAppiOS = () => {
  return 'standalone' in window.navigator && (window.navigator.standalone);
}