import React from 'react'

function Homes() {
    return (
        <>
            {/* hero section */}
            <section
                className="relative min-h-screen flex items-center justify-center text-center px-6 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Text Content */}
                <div className="relative z-10 max-w-3xl text-white">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                        Welcome to <br />
                        <span className="text-gray-200">neX Solutions</span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl text-gray-100 drop-shadow-md">
                        We help businesses grow by building modern, scalable, and
                        user-friendly digital solutions. Our team blends design, technology,
                        and strategy to create meaningful experiences.
                    </p>
                </div>
            </section>



            {/* services section */}
            <section id="services" className="py-16 px-6 bg-white">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        What We Do
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        From design to deployment, we provide end-to-end solutions tailored to your business needs.
                    </p>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        {/* Service 1 */}
                        <div className="p-6 bg-slate-50 rounded-xl shadow hover:shadow-md transition">
                            <img
                                src="https://img.icons8.com/fluency/96/web.png"
                                alt="Web Development"
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
                            <p className="text-slate-600">
                                We build responsive, fast, and secure websites that engage your audience and scale with your growth.
                            </p>
                        </div>

                        {/* Service 2 */}
                        <div className="p-6 bg-slate-50 rounded-xl shadow hover:shadow-md transition">
                            <img
                                src="https://img.icons8.com/fluency/96/android-os.png"
                                alt="Mobile Apps"
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Mobile Apps</h3>
                            <p className="text-slate-600">
                                Our mobile solutions bring your business to your customers’ fingertips with smooth user experiences.
                            </p>
                        </div>

                        {/* Service 3 */}
                        <div className="p-6 bg-slate-50 rounded-xl shadow hover:shadow-md transition">
                            <img
                                src="https://img.icons8.com/fluency/96/cloud.png"
                                alt="Cloud Solutions"
                                className="w-16 h-16 mx-auto mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
                            <p className="text-slate-600">
                                Scalable, secure, and cost-efficient cloud setups to help your business thrive in the digital era.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* feedback section */}

            <section id="testimonials" className="py-16 px-6 bg-[#f9f8f4]">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
                        What Our Clients Say
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                        Don’t just take our word for it — here’s what our clients say about working with us.
                    </p>

                    {/* Testimonials Grid */}
                    <div className="mt-12 grid gap-8 md:grid-cols-3">

                        {/* Testimonial 1 */}
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-left">
                            <p className="text-slate-600 italic">
                                “YourCompany helped us redesign our website, and the results were incredible.
                                Our traffic and engagement have doubled!”
                            </p>
                            <div className="mt-4">
                                <h4 className="font-semibold text-slate-800">Sarah Johnson</h4>
                                <span className="text-sm text-slate-500">Marketing Lead, BrightCorp</span>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-left">
                            <p className="text-slate-600 italic">
                                “They built a mobile app for our startup in record time. Clean, fast, and super easy to use. Couldn’t be happier.”
                            </p>
                            <div className="mt-4">
                                <h4 className="font-semibold text-slate-800">James Miller</h4>
                                <span className="text-sm text-slate-500">Founder, Appify</span>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="p-6 bg-white rounded-xl shadow hover:shadow-md transition text-left">
                            <p className="text-slate-600 italic">
                                “Professional, reliable, and innovative. They are our go-to partner for all digital projects.”
                            </p>
                            <div className="mt-4">
                                <h4 className="font-semibold text-slate-800">Priya Nair</h4>
                                <span className="text-sm text-slate-500">CTO, CloudNet</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Homes