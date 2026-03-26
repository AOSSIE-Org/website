import { useId } from 'react'

export function Pattern({
  size = 40,
  gapX = 16,
  gapY = 8,
  pattern = [
    [0, 1, 0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 0, 1],
    [0, 1, 0, 1, 1, 0, 1, 0],
    [1, 0, 1, 1, 0, 0, 0, 1],
  ],
  className,
  ...props
}) {
  let id = useId()
  let width = pattern[0].length * size + (pattern[0].length - 1) * gapX
  let height = pattern.length * size + (pattern.length - 1) * gapY

  return (
    <svg aria-hidden="true" width={width} height={height} className={`overflow-visible ${className || ''}`.trim()} {...props}>
      <defs>
        <symbol id={`${id}-0`} width={size} height={size}>
          <rect className="fill-green-200 dark:fill-yellow-200 transition-colors duration-500" width={size} height={size} />
          <circle
            className="fill-[#00843D] dark:fill-yellow-400 shadow-xl transition-colors duration-500"
            cx={size / 2}
            cy={size / 2}
            r={size * (13 / 40)}
          />
        </symbol>
        <symbol id={`${id}-1`} width={size} height={size}>
          <circle
            className="fill-green-300 dark:fill-yellow-300 animate-pulse transition-colors duration-500"
            cx={size / 2}
            cy={size / 2}
            r={size / 2}
          />
          <rect
            className="fill-[#00843D] dark:fill-yellow-400 shadow-xl transition-colors duration-500"
            width={size / 2}
            height={size / 2}
            x={size / 4}
            y={size / 4}
          />
        </symbol>
      </defs>
      {pattern.map((row, rowIndex) =>
        row.map((shape, columnIndex) => {
          const x = columnIndex * size + columnIndex * gapX;
          const y = rowIndex * size + rowIndex * gapY;
          
          // Determine a playful alternating rotation direction based on the grid index
          const hoverRotation = (rowIndex + columnIndex) % 2 === 0 ? "group-hover:rotate-[15deg]" : "group-hover:-rotate-[15deg]";
          
          return (
            <g key={`${rowIndex}-${columnIndex}`} className="group cursor-pointer">
              {/* Invisible, static hit area to handle hover without flickering */}
              <rect x={x} y={y} width={size} height={size} fill="transparent" className="pointer-events-auto" />
              <use
                href={`#${id}-${shape}`}
                x={x}
                y={y}
                style={{ transformOrigin: `${x + size / 2}px ${y + size / 2}px` }}
                className={`transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.4] ${hoverRotation} group-hover:drop-shadow-lg pointer-events-none`}
              />
            </g>
          );
        })
      )}
    </svg>
  )
}
