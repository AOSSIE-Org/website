import { forwardRef } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, bgColor, ...props },
  ref
) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={ref}
      className={clsx('sm:px-8', className)}
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </motion.div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </motion.div>
  )
})

export const Container = forwardRef(function Container(
  { children, bgColor = 'transparent', ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} bgColor={bgColor} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer
