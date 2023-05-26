import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Christian Gleitze</title>
        <meta
          name="description"
          content="Christian Gleitze is a Frontend Web Developer and Podcaster in Frankfurt, Germany."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-0 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hey! I&apos;m Chris,
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                a <b>Frontend Developer</b> living in Frankfurt, Germany. I
                program websites and apps with JavaScript, ReactJS and other web
                technologies. If you&apos;re interested in that make sure to
                check out my{' '}
                <a
                  href="\projects"
                  class="text-teal-400 underline hover:no-underline"
                >
                  portfolio
                </a>
                .
              </p>
              <p>
                I learned HTML and CSS basics in school. In 2017 I built my
                first website with WordPress. In 2020 I started creating
                websites for clients with WordPress, Webflow and other Content
                Management Systems. Since 2022 I&apos;m programming websites and
                apps with JavaScript technologies like React and various CSS
                frameworks.
              </p>
              <p>
                I love meeting new people and learn from them. That&apos;s why
                I&apos;m also a <b>Podcaster</b>. For my{' '}
                <a
                  href="https://linktr.ee/ConnectingDotsPod"
                  class="text-teal-400 underline hover:no-underline"
                >
                  podcast
                </a>{' '}
                I talk to founders and other interesting people about their
                lessons and stories.
              </p>
              <p>
                Do you want to talk to me about programming, podcasting or
                something else? Feel free to reach out to me via mail or on
                social media. I&apos;d love to hear from you!
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/chrisgleitze"
                target="_blank"
                icon={TwitterIcon}
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/chrisgleitze"
                icon={LinkedInIcon}
                className="mt-4"
                target="_blank"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://github.com/chrisgleitze"
                icon={GitHubIcon}
                className="mt-4"
                target="_blank"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="mailto:&#099;&#104;&#114;&#105;&#115;&#116;&#105;&#097;&#110;&#045;&#103;&#108;&#101;&#105;&#116;&#122;&#101;&#064;&#119;&#101;&#098;&#046;&#100;&#101;"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                Send me an e-mail
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
