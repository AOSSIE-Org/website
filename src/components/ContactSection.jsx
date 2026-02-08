import { Container } from '@/components/Container'
import { SectionHeading } from '@/components/SectionHeading'
import CardContact from '@/components/CardContact'

export default function ContactSection() {
    return (
        <Container className="mt-16 sm:mt-20">

            <div className="mb-10 max-w-4xl">
                <SectionHeading>Get in Touch</SectionHeading>

                <h2 className="mt-6 text-2xl font-normal leading-relaxed tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">
                    AOSSIE is an Australian not-for-profit organization supporting innovation through <span className="text-zinc-500 dark:text-zinc-400">open-source software.</span>
                </h2>

                <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                    Connect with us below.
                </p>
            </div>


            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <CardContact
                    href="https://github.com/aossie"
                    target="_blank"
                    title="GitHub"
                    description="Browse and contribute to our projects."
                    type="github"
                />
                <CardContact
                    href="https://gitlab.com/aossie"
                    target="_blank"
                    title="GitLab"
                    description="Follow development and issue tracking."
                    type="gitlab"
                />
                <CardContact
                    href="https://discord.com/invite/C8wHmwtczs"
                    target="_blank"
                    title="Discord"
                    description="Join the community discussions."
                    type="discord"
                />
                <CardContact
                    href="mailto:contact@aossie.org"
                    title="Email"
                    description="Contact the core team directly."
                    type="mail"
                />
                <CardContact
                    href="https://x.com/aossie_org"
                    target="_blank"
                    title="X"
                    description="Follow us for news and updates."
                    type="x"
                />
            </div>

            <section className="mt-24">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {[
                        {
                            title: 'Open Source First',
                            text: 'All our initiatives are built in the open, welcoming contributors at every level.',
                        },
                        {
                            title: 'Student Driven',
                            text: 'We focus on mentoring students through real-world open-source collaboration.',
                        },
                        {
                            title: 'Global Community',
                            text: 'Contributors and mentors from universities and organizations worldwide.',
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-3xl border border-zinc-200/70 bg-white p-6 
                                       dark:border-zinc-800 dark:bg-zinc-900/50"
                        >
                            <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                {item.title}
                            </h4>
                            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </Container>
    )
}