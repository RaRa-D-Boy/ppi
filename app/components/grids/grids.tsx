'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpen, Eye } from 'lucide-react';

type CardProps = {
    title: string;
    time: string;
    href: string;
    bgImage?: string;
};

const Card: React.FC<CardProps> = ({ title, time, href, bgImage }) => {
    return (
        <Link
            href={href}
            target="_blank"
            className="group relative flex text-black hover:text-white h-56 flex-col justify-end overflow-hidden border border-gray-200 p-6 bg-transparent transition-colors hover:bg-neutral-950 md:h-80 md:p-9"
        >
            <div className="absolute left-3 top-5 z-10 flex items-center gap-1.5 text-xs uppercase text-neutral-400 transition-colors duration-500 group-hover:text-neutral-50">
                <span className='text-base'>{title}</span>

            </div>

            <h2 className="relative z-10 text-sm leading-tight transition-transform duration-500 group-hover:-translate-y-3">
                {time}
            </h2>

            {bgImage && (
                <div
                    className="absolute inset-0 opacity-0 blur-lg scale transition-all group-hover:opacity-20 group-active:scale-105 group-active:opacity-30 group-active:blur-0 group-active:grayscale-0"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            )}

            {/* Decorative Borders */}
            {['top', 'bottom'].flatMap((pos) => [
                <span
                    key={`${pos}-left`}
                    className={`absolute ${pos}-[1px] left-[1px] z-10 h-3 w-[1px] origin-${pos} scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100`}
                />,
                <span
                    key={`${pos}-left-h`}
                    className={`absolute ${pos}-[1px] left-[1px] z-10 h-[1px] w-3 origin-left scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100`}
                />,
                <span
                    key={`${pos}-right`}
                    className={`absolute ${pos}-[1px] right-[1px] z-10 h-3 w-[1px] origin-${pos} scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100`}
                />,
                <span
                    key={`${pos}-right-h`}
                    className={`absolute ${pos}-[1px] right-[1px] z-10 h-[1px] w-3 origin-right scale-0 bg-emerald-300 transition-all duration-500 group-hover:scale-100`}
                />,
            ])}
        </Link>
    );
};

export const CardGrid: React.FC = () => {
    const cards: CardProps[] = [
        {
            title: 'Efficient Infrastructure Allocation',
            time: 'Introducing a new model of building infrastructure to support the efficient allocation of capital to road projects.',
            href: '#',
            bgImage:
                '/strategies/strategy1.jpg',
        },
        {
            title: 'Charity Meets Private Equits',
            time: 'PPI combines the charity model with private equity discipline unlike any other organization around the world.',
            href: '#',
            bgImage:
                '/strategies/strategy2.jpg',
        },
        {
            title: 'Transparent & Accountable Funding',
            time: 'Thereby, creating a vehicle that is transparent, fully auditable, and can be held accountable for money given it to execute road infrastructure projects.',
            href: '#',
            bgImage:
                '/strategies/strategy3.jpg',
        },
        {
            title: 'Embracing a Commercial Mindset',
            time: 'We have an unwavering commitment to work with governments and wider system to embrace the commercial mindset of allocating capital to infrastructure assets traditionally classified as public goods.',
            href: '#',
            bgImage:
                '/strategies/strategy4.jpg',
        },
        {
            title: 'Driving Socioeconomic Impact',
            time: 'This is geared towards increasing socioeconomic outcomes for society and other relevant stakeholders.',
            href: '#',
            bgImage:
                '/strategies/strategy5.jpg',
        },

    ];

    return (
        <section className="bg-transparent">
            <div className='lg:px-24 px-12'>
                <p className="max-w-[250px] p-4 text-center text-sm uppercase bg-gray-100 text-green-600">
                    Executing Strategies
                </p>
            </div>

            <div className="bg-transparent text-neutral-50 ">
                <div className=" grid w-full lg:px-24 px-12 py-12 grid-cols-1 gap-0 md:grid-cols-3">
                    {/* Newsletter Card */}
                    <Link
                        href="#"
                        target="_blank"
                        className="group relative flex h-56 flex-col text-black hover:text-green-400 justify-between border bg-gray-100 hover:bg-green-950 p-6 md:h-80 md:p-9"
                    >
                        <h2 className="text-4xl uppercase leading-tight">

                            How We Are Doing It.
                        </h2>

                    </Link>

                    {/* Other Cards */}
                    {cards.map((card, idx) => (
                        <div key={idx} >
                            <Card  {...card} />
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};
