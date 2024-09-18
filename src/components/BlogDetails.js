
import { useParams } from 'react-router-dom';
import { GoDash } from "react-icons/go";

const BlogDetails = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL

  const blogData = [
    {
      id: 1,
      title: 'Graphic Design in Motorsport: Race Track Logos',
      heading: 'John Mears',
      dash:<GoDash/>,
      time: '20 minutes',
      image: '/assets/Blog1.jpg'
    },
    {
      id: 2,
      title: 'How 10 Subscription Services Explain Cancellation During Sign Up',
      heading: 'Kerry Crawford',
      dash:<GoDash/>,
      time: '12 minutes',
      image: '/assets/Blog2.png'
    },
    {
      id: 3,
      title: 'How 10 Popular Product Subscriptions Talk About Cancellation During Sign Up',
      heading: 'Kerry Crawford',
      dash:<GoDash/>,
      time: '6 minutes',
      image: '/assets/Blog3.jpg'
    },
    {
      id: 4,
      title: 'A Not-So-Simple Question About Subscription Anxiety',
      heading: 'Kerry Crawford',
      dash:<GoDash/>,
      time: '5 minutes',
      image: '/assets/Blog4.jpg'
    },
    {
      id: 5,
      title: 'Attack the Climbs',
      heading: 'Patrick McNeely',
      dash:<GoDash/>,
      time: '5 minutes',
      image: '/assets/Blog5.gif'
    },
  ];





 




  // Find the specific blog post based on the id
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className='md:w-[80%] w-[90%] mx-auto my-24'>
      <h1 className='text-4xl font-bold mb-10'>{blog.title}</h1>
      <img src={blog.image} alt={blog.title} className='w-full h-96 object-cover rounded-lg mb-10' />
      <p className='text-lg'>{blog.content}</p>
    </div>
  );
};

export default BlogDetails;
