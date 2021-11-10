import { ReactSVG } from "react-svg";

const ZennIcon = () => {
  return (
    <ReactSVG
      afterInjection={(error) => {
        if (error) return console.error(error)
      }}
      beforeInjection={(svg) => {
        svg.setAttribute('style', 'width: 28px; background-color: var(--chakra-colors-whiteAlpha-900); border-radius: 50%')
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
