import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@chakra-ui/react'

const LocaleToggleButton = ({ setLocale, locale }) => {

  const onClick = () => {
    if (locale == "jp") setLocale('en')
    else if (locale == "en") setLocale('jp')
  }

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={locale}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <Button
          width="10"
          colorScheme={locale == "jp" ? "orange" : "purple"}
          onClick={onClick}
        >{locale}</Button>
      </motion.div>
    </AnimatePresence>
  )
}

export default LocaleToggleButton