import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa'

export default function SocialShare() {
  const shareUrl = "https://danielsimms.dev"
  const title = "Daniel Simms - Computer Science Portfolio"

  return (
    <div className="flex justify-center space-x-4 py-4">
      <a 
        href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${title}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition-colors"
      >
        <FaTwitter size={24} />
      </a>
      <a 
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 transition-colors"
      >
        <FaLinkedin size={24} />
      </a>
      <a 
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors"
      >
        <FaFacebook size={24} />
      </a>
    </div>
  )
} 