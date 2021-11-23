import { ReactSVG } from "react-svg";

const ZennIcon = ({ color }) => {
  const style = color == "default" ? "width: 28px; background-color: var(--chakra-colors-whiteAlpha-900);" : "background-color: var(--chakra-colors-teal-200); width: 15px;"
  return (
    <ReactSVG
      afterInjection={(error) => {
        if (error) return console.error(error)
      }}
      beforeInjection={(svg) => {
        svg.setAttribute('style', `${style} border-radius: 50%`)
      }}
      evalScripts="always"
      renumerateIRIElements={false}
      useRequestCache={true}
      wrapper="span"
      src="/images/zenn.svg"
    />
  )
}

export default ZennIcon;
