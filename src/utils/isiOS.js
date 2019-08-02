export const isiOS = () => {
      const ua = window.navigator.userAgent;
      return (!!ua.match(/iPad/i) || !!ua.match(/iPhone/i))
}

export default isiOS;