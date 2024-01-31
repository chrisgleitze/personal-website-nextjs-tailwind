import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import {Container} from '@/components/Container'
import {
    GitHubIcon,
    LinkedInIcon,
    TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({className, href, children, icon: Icon}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500"/>
                <span className="ml-4">{children}</span>
            </Link>
        </li>
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
                                alt="swimming in a pool"
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
                                a Junior Frontend Engineer at an IT Consultancy in Frankfurt. I program websites and
                                apps with JavaScript, TypeScript and
                                ReactJS. If you&apos;re interested in that, then make sure to
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
                                Though I&apos;m not just sitting at my laptop. My extroverted
                                part comes out in my conversational podcast. For my{' '}
                                <a
                                    href="https://linktr.ee/ConnectingDotsPod"
                                    class="text-teal-400 underline hover:no-underline"
                                >
                                    podcast
                                </a>{' '}
                                I talked to founders and other interesting people about their
                                lessons and stories. And if you like music, you can check out my{' '}
                                <a
                                    href="https://www.youtube.com/@reunionsmusic"
                                    class="text-teal-400 underline hover:no-underline"
                                >
                                    YouTube channel
                                </a>
                                . There I post videos of concerts I&apos;ve been to.
                            </p>
                            <p>
                                Do you want to talk to me about programming, podcasting or
                                something else? Feel free to reach out to me on
                                social media. I&apos;d love to hear from you!
                            </p>
                        </div>
                    </div>
                    <div className="lg:pl-20">
                        <ul role="list">
                            <SocialLink
                                href="https://twitter.com/chrisgleitze"
                                aria-label="Follow on Twitter"
                                target="_blank"
                                icon={TwitterIcon}
                            >
                                Twitter
                            </SocialLink>
                            <SocialLink
                                href="https://github.com/chrisgleitze"
                                aria-label="Follow on GitHub"
                                icon={GitHubIcon}
                                className="mt-4"
                                target="_blank"
                            >
                                GitHub
                            </SocialLink>
                            <SocialLink
                                href="https://www.linkedin.com/in/chrisgleitze"
                                aria-label="Follow on LinkedIn"
                                icon={LinkedInIcon}
                                className="mt-4"
                                target="_blank"
                            >
                                LinkedIn
                            </SocialLink>
                        </ul>
                    </div>
                </div>
            </Container>
        </>
    )
}
