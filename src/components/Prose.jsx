import clsx from 'clsx'

export function Prose({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        'prose dark:prose-invert [&>blockquote]:my-3 [&>h2]:mt-8 [&>h3]:mt-8 [&>h4]:mt-8 [&>ol]:my-3 [&>p]:my-3 [&>pre]:my-3 [&>ul]:my-3 [&_li]:my-0.5 [&_ol>li>p]:my-1 [&_ul>li>p]:my-1',
      )}
    >
      {children}
    </div>
  )
}
