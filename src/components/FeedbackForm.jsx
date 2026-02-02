'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'

export function FeedbackForm() {
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    setSubmitted(true)
    setTimeout(() => {
        setSubmitted(false);
        setRating(0);
        e.target.reset();
    }, 3000)
  }

  return (
    <div className="bg-white dark:bg-zinc-800/50 p-6 rounded-xl border border-zinc-200 dark:border-zinc-700/50 mt-8">
      <h3 className="text-xl font-bold font-mono text-zinc-900 dark:text-zinc-100 mb-4">
        Share Your Thoughts
      </h3>
      
      {submitted ? (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 text-[#00843D] dark:text-green-400 rounded-lg text-center font-mono">
          Thank you for your feedback!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Rating
            </label>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className="focus:outline-none transition-transform hover:scale-110"
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                >
                  <FontAwesomeIcon
                    icon={star <= (hoverRating || rating) ? faStar : faStarRegular}
                    className={`w-6 h-6 ${
                      star <= (hoverRating || rating)
                        ? 'text-yellow-400'
                        : 'text-zinc-300 dark:text-zinc-600'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full rounded-md border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm focus:border-[#00843D] focus:ring-[#00843D] font-mono sm:text-sm px-4 py-2 border"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="feedback" className="block text-sm font-mono font-medium text-zinc-700 dark:text-zinc-300 mb-2">
              Feedback
            </label>
            <textarea
              id="feedback"
              required
              rows={4}
              className="w-full rounded-md border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 shadow-sm focus:border-[#00843D] focus:ring-[#00843D] font-mono sm:text-sm px-4 py-2 border"
              placeholder="Tell us what you think..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-md bg-[#00843D] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#006e32] focus:outline-none focus:ring-2 focus:ring-[#00843D] focus:ring-offset-2 dark:bg-yellow-400 dark:text-black dark:hover:bg-yellow-500 font-mono transition-colors"
          >
            Submit Review
          </button>
        </form>
      )}
    </div>
  )
}
