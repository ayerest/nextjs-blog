import Link from 'next/link';
import Image from 'next/image';

const FirstPost = () => {
  return (
  <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <Image
          src="/images/profile.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
      </h2>
    </>
  )
}

export default FirstPost;