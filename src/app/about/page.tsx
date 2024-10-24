// src/app/about/page.tsx
import Header from '../components/Header';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Left Sidebar */}
                    <div className="space-y-8">
                        {/* Current Show */}
                        <div className="bg-gray-100 p-4 rounded-lg">
                            <h2 className="text-xl font-bold">ARTBEAT</h2>
                            <p className="text-gray-600">9:00AM - 12:00PM</p>
                        </div>

                        {/* Stream Player */}
                        <div className="bg-red-600 text-white p-4 rounded-lg">
                            <h2 className="text-xl font-bold">STREAM RTR2</h2>
                            <div className="mt-4 text-center">
                                <button className="text-2xl">▶</button>
                            </div>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="md:col-span-3">
                        <div className="bg-white p-8 rounded-lg shadow">
                            <h1 className="text-4xl font-bold mb-6">About RTR FM</h1>

                            <div className="prose max-w-none">
                                <p className="text-lg mb-4">
                                    RTR FM 92.1 is your community radio station, bringing you the best in local music and culture.
                                </p>

                                <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
                                <p className="mb-4">
                                    We aim to provide a platform for alternative voices, independent music, and community engagement.
                                </p>

                                <h2 className="text-2xl font-bold mt-8 mb-4">Get Involved</h2>
                                <p className="mb-4">
                                    Whether you&apos;re a musician, volunteer, or just passionate about local radio, there are many ways to be part of RTR FM.
                                </p>

                                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                                    <p>Email: info@rtrfm.com</p>
                                    <p>Phone: (08) 9260 9210</p>
                                    <p>Address: 155 Brisbane Street, Perth</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <div className="bg-gray-100 h-16 mt-8">
                <div className="text-gray-400 text-center py-4">
                    THE SOUND ≈≈≈≈≈≈≈ THE SOUND ≈≈≈≈≈≈≈ THE SOUND
                </div>
            </div>
        </div>
    );
}