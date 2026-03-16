import clsx from 'clsx'

const categories = ['All', 'Philosophy', 'Programming', 'Podcasting', 'Other']

export function CategoryFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={clsx(
            'rounded-full px-4 py-1.5 text-sm font-medium transition',
            activeCategory === category
              ? 'bg-teal-500 text-white'
              : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700',
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
