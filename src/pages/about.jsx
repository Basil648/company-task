import React from 'react'

function About() {
    return (
        <>
            <section id="about" className="py-20 bg-[#f9f8f4] px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 text-center mb-12">
                        About <span className="text-slate-600">neX Solutions</span>
                    </h2>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div>
                            <img
                                src='https://imgs.search.brave.com/FvHY6Txu25YSEBBwfo_yFX5xxKum8MNqcg-hNyMZGnY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzcyLzRj/LzMwLzcyNGMzMGUw/OGUxYjJhNmZhYTZj/ZTM3ZmNkOWY0MDcx/LmpwZw'
                                alt="Company Building"
                                className="rounded-xl shadow-lg"
                            />
                        </div>

                        {/* History */}
                        <div>
                            <h3 className="text-2xl font-semibold text-slate-800 mb-4">
                                Our Story
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Founded with a vision to empower businesses, neX Solutions has
                                grown into a trusted partner for companies seeking innovation. We
                                started as a small team of developers and designers and have
                                expanded into a full-fledged digital solutions provider.
                                <br /> <br />
                                Today, we continue to deliver impactful solutions that combine
                                creativity, technology, and strategy.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="mt-16 text-center">
                        <h3 className="text-2xl font-semibold text-slate-800 mb-6">
                            What Drives Us
                        </h3>
                        <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
                            At neX Solutions, our mission is to simplify technology for
                            businesses. We believe in innovation, transparency, and delivering
                            value through every project we take on. Our team is passionate about
                            creating solutions that stand the test of time.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About