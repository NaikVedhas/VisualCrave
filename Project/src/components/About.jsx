const About = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">About VisualCrave</h1>
        <p className="text-gray-700 text-lg mb-6">
          Welcome to VisualCrave, your go-to platform for breathtaking visuals from all around the world.
          We believe in the power of imagery to tell stories, inspire creativity, and capture moments that
          words cannot fully describe. Our curated gallery is a tribute to the artists who freeze time with their lenses.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4">
            <h2 className="text-xl font-semibold text-blue-500">Our Mission</h2>
            <p className="text-gray-600 mt-2">
              To provide an immersive experience for anyone looking to explore the art of photography. We are passionate about bringing stunning visuals to the forefront, where creativity knows no bounds.
            </p>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-blue-500">Our Vision</h2>
            <p className="text-gray-600 mt-2">
              We aim to create a community of photographers and art enthusiasts who can connect, share, and explore the beauty of visual storytelling. VisualCrave is a celebration of both professional and amateur photographers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
