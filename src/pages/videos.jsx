import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'

const videos = [
  {
    id: 'j2jA5kDcrnM',
    title: 'practicing touch typing (and some Vim motions)',
  },
  {
    id: 'VJWmP8bXt3o',
    title: 'monkey types on moonlander keyboard',
  },
  {
    id: 'OrRk6zSuhi8',
    title:
      'The Moonlander in 2026 - review of my ergonomic split keyboard (summary: I love it!)',
  },
  {
    id: '2J4ea38vuDM',
    title:
      'improving your zsh startup time by a lot (node version manager is the problem)',
  },
  {
    id: 'fi-ixALIZ2Y',
    title:
      'My Neovim Config 4 - autocommands, zen mode, surround, vim-visual-multi',
  },
  {
    id: 'FIbNIRbWzHM',
    title: 'My Neovim Config 3 - fast file switching with Harpoon',
  },
  {
    id: '98dN9uuKLio',
    title: 'My Neovim Config 2 - file picker: fzf-lua',
  },
  {
    id: 'A8Gr4twhUx8',
    title: 'My Neovim Config 1 - simple, effective keymaps',
  },
  {
    id: 'sT5pp0jDN6s',
    title:
      'Fuzzy finders in the IDE, the browser and on your Operating System (Developer Workflow Tools)',
  },
  {
    id: '6x_e5zbnlRs',
    title:
      'Full Vim Developer Experience - Neovim Distro or no? Vim in Browser & OS? [incl. 3 quick Vim tips]',
  },
]

export default function Videos() {
  return (
    <>
      <Head>
        <title>Videos - Christian Gleitze</title>
        <meta
          name="description"
          content="YouTube videos from the Connecting.Dots.Coding channel."
        />
      </Head>
      <SimpleLayout
        title="Videos"
        intro={
          <>
            These are my coding and tech related videos from{' '}
            <a
              href="https://www.youtube.com/@connectingdotscoding"
              className="text-teal-500 hover:underline dark:text-teal-400"
              target="_blank"
              rel="noreferrer noopener"
            >
              my YouTube channel
            </a>
            .
          </>
        }
      >
        <div className="space-y-12">
          {videos.map((video) => (
            <div key={video.id}>
              <h2 className="mb-4 text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                {video.title}
              </h2>
              <div className="aspect-video w-full">
                <iframe
                  className="h-full w-full rounded-lg"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </SimpleLayout>
    </>
  )
}
