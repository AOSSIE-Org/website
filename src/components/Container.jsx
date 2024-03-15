import { forwardRef } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion' // Import motion for animations

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, bgColor, ...props }, // Added bgColor prop
  ref
) {
  return (
    <motion.div // Wrapped in motion for animation support
      initial={{ opacity: 0 }} // Initial animation state
      animate={{ opacity: 1 }} // Animation when component is mounted
      transition={{ duration: 0.5 }} // Animation duration
      ref={ref}
      className={clsx('sm:px-8', className)}
      style={{ backgroundColor: bgColor }} // Apply background color style
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
    <motion.div // Wrapped in motion for animation support
      initial={{ opacity: 0 }} // Initial animation state
      animate={{ opacity: 1 }} // Animation when component is mounted
      transition={{ duration: 0.5 }} // Animation duration
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </motion.div>
  )
})

export const Container = forwardRef(function Container(
  { children, bgColor = 'transparent', ...props }, // Added bgColor prop with default value
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
