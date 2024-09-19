
import { useParams } from 'react-router-dom';
import { GoDash } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { MdKeyboardArrowLeft } from "react-icons/md";


const BlogDetails = () => {
  const { id } = useParams(); // Get the dynamic ID from the URL
  const Navigate = useNavigate();

  const blogData = [
    {
      id: 1,
      title: 'Graphic Design in Motorsport: Race Track Logos',
      heading: 'John Mears',
      dash:<GoDash/>,
      time: '20 minutes',
      image: '/assets/Blog1.jpg',
      personImage: '/assets/AboutCompany1.png',
      date:'June 12, 2024',
      content:'John brings together his passions for design and fast cars by sharing four rules of race track logo design.',
      extraContent:[
        'I’m a designer and nerd (if that wasn’t redundant). I was into F1 before Netflix made it cool, and building model cars and playing racing sims have been a couple of my favorite hobbies for more than two decades. Each hobby has made the other more interesting. Models have taught me a lot about how race cars work in the mechanical sense, and sim racing has helped me appreciate what goes into competition at the driver’s level - the racing line, changing conditions, when to defend, when to send it, and the nuances of different tracks that appear on Sunday morning races.',
        
        'I love the fact that graphic design is a hybrid discipline, a healthy mix of art and science, left-brained creativity and right-brained data. I think auto racing is similar – a combination of human athleticism and technical engineering - which probably explains my interest in the latter. And when they come together, I can’t help but take notice.',
      
        'There are lots of opportunities to geek out on the intersections between graphic design and motorsport: racing liveries, the barrage of brand identities, and information graphics. But I wouldn’t be a true nerd if I didn’t zoom in on one of the lesser-studied aspects - the branding design of race track logos - and how some do a better job than others at communicating what they’re like.'
      ],
    bioData:'John is the director of creative services at Simple Focus. He draws on over 15 years of front-end and product design experience to oversee our creative process, ensure top-notch work, and challenge our designers to never stop learning.'

    },


    {
      id: 2,
      title: 'How 10 Subscription Services Explain Cancellation During Sign Up',
      heading: 'Kerry Crawford',
      dash:<GoDash/>,
      time: '12 minutes',
      image: '/assets/Blog2.png',
      personImage: '/assets/AboutCompany5.jpg',
      date:'August 20, 2024',
      content:'In this multi-part series, UX researcher Kerry Crawford tries to figure out whether having cancellation info in advance makes users feel more confident about signing up for recurring payments.',
      extraContent:[
        'These days, it seems like every major network - Disney, Paramount, Discovery, Apple - has its own proprietary streaming service. What do you do when one of those companies produces a zeitgeisty show you really want to see? You either miss it, have a friend share their password, or subscribe to yet another service.',
        
        'That’s how I wound up with HBOMax. I wanted to watch the Gossip Girl reboot (spoiler alert: it’s terrible). I wanted to watch Succession. And, it was the only place I could watch the greatest dating show of our time, F-Boy Island (RIP).',
      
        'Im on a monthly plan, so I’m not locked in to a contract. Even though I don’t remember seeing any specific information about cancelling when I subscribed, I have an account that I assume I’ll be able to manage (like on other streaming services).But what if I’m signing up for a type of service Im less familiar with? What if it isn’t so clear? What if I’ve paid annually to get a better deal - can I still cancel? If the service doesn’t provide any information about cancellation before I subscribe, or the info they give isn’t clear, will I still sign up?'

      ],
    bioData:'Kerry is the director of research and strategy at Simple Focus. In addition to her UX design and architecture work, shes responsible for setting and guiding strategy for our projects and overseeing our research efforts. Thoughtful documentation is her love language.'

    },


    {
      id: 3,
      title: 'How 10 Popular Product Subscriptions Talk About Cancellation During Sign Up',
      heading: 'Kerry Crawford',
      dash:<GoDash/>,
      time: '6 minutes',
      image: '/assets/Blog3.jpg',
      personImage: '/assets/AboutCompany5.jpg',
      date:'Septumber 12, 2024',
      content:'In this multi-part series, UX researcher Kerry Crawford tries to figure out whether having cancellation info up front makes users feel more confident about signing up for recurring payments.',
      extraContent:[
        'When I was stuck at home during COVID lockdown, I signed up for a subscription grocery service for the first time. Every two weeks, Misfits Market sent me a box full of fresh produce, as well as any extra groceries I wanted. I really liked it. The company was committed to reducing food waste by selling perfectly good produce that would otherwise be thrown out. The products were high quality, and they sent me veggies I’d never tried, which made me more creative in the kitchen. And, it saved me trips to the grocery store at the height of a global pandemic.',
        
        'I was hesitant to sign up at first. What if it was too expensive? What if I didn’t like it? What if it was just way too much food? I lived alone and wanted to avoid piles of produce rotting in my fridge because I couldn’t eat them fast enough.',
      
        'Their site was reassuring - before I signed up, they let me know I could skip weeks, pause my service, or cancel whenever I wanted. Having that information made me feel like the company cared about my experience, and made me a lot more comfortable handing over my credit card info.'
      ],
    bioData:'Kerry is the director of research and strategy at Simple Focus. In addition to her UX design and architecture work, shes responsible for setting and guiding strategy for our projects and overseeing our research efforts. Thoughtful documentation is her love language.'

    },


    {
      id: 4,
      title: 'A Not-So-Simple Question About Subscription Anxiety',
      heading: 'Kerry Crawford',
      dash:<GoDash/>,
      time: '5 minutes',
      image: '/assets/Blog4.jpg',
      personImage: '/assets/AboutCompany5.jpg',
      date:'June 2, 2024',
      content:'In this multi-part series, UX researcher Kerry Crawford tries to figure out whether having cancellation info in advance makes users feel more confident about signing up for recurring payments.',
      extraContent:[
        'If you’ve listened to a podcast, used the internet, or just existed in the year of our lord 2023, you’ve probably been bombarded with ads for companies offering to make your life easier by setting you up with subscriptions for everything from TV streaming to kitty litter. Chances are, you’ve signed up for at least one subscription, if not more. I don’t consider myself much of a subscriber, but a quick glance at last month’s bank statement shows that I pay for:',
        
        'Ten services (including streaming TV and music, news sites, podcasts and a fitness app) Five monthly charitable donations One physical product (fancy prescription food for my elderly dog) And, I pay for all of them every month without a single thought. The money magically disappears from my account and I can watch what I want, support causes I care about and make sure my dog is fed without much effort.',
      
        'Automation is not without anxiety. Setting up recurring payments - whether for physical products, services or charitable donations - can make life a lot easier. By subscribing, you can run fewer errands, save time, and in some cases, save money on things you regularly buy. Theres real anxiety around setting recurring payments, and how easy it can be to forget that you have them. There are now multiple apps devoted to helping people find, manage and cancel subscriptions. And, it’s becoming common for companies that offer subscriptions to tout “cancel anytime” like it’s a unique feature. From a business perspective, glossing over cancellation info makes sense. Organizations require money, and it’s in their best interest to not remind a customer who is considering a purchase that one day, they might want to stop paying.'
      ],
    bioData:'Kerry is the director of research and strategy at Simple Focus. In addition to her UX design and architecture work, shes responsible for setting and guiding strategy for our projects and overseeing our research efforts. Thoughtful documentation is her love language.'

    },


    {
      id: 5,
      title: 'Attack the Climbs',
      heading: 'Patrick McNeely',
      dash:<GoDash/>,
      time: '5 minutes',
      image: '/assets/Blog5.gif',
      personImage: '/assets/AboutCompany2.jpeg',
      date:'May 15, 2024',
      content:'Patrick connects strategies for mountain biking to pushing through challenges at a product design agency.',
      extraContent:[
        'Over the past two years, I’ve become increasingly obsessed with riding singletrack on a mountain bike (yes, this is a pandemic-borne hobby). I’m spending 5-10 hours a week on trails, plus time on a smart trainer or lifting weights in my basement. I may have a problem. I grind up, then fly back down hills dozens (or hundreds) of times over the course of a 10-15 mile ride, living in Zone 3 or 4 cardio for an hour or more. It’s hard work, and I love it.I like to go fast. Not every ride needs to be a PR, but seeing how I fare against friends and my past rides on Strava is an easy way to gauge my improvement. How quickly I complete a route is determined by a combination of skill, experience, fitness, sleep, nutrition, trail conditions and my effort minute-to-minute.',
        
        'While working on breaking an hour, a friend told me that the only way to do it is to “attack the climbs.” The implication is that racing down hills, pumping rollers, driving into curves and making good line choices is where your skill and strength come into play, but if you want to mentally and physically push yourself, the biggest gains are found on uphills. An all-out downhill effort might shave seconds off your time, while going hard on an uphill potentially saves full minutes. Now we’re making progress.',
      
        'When things are going great (plenty of clients, growing team, healthy finances), clients need our help, they pay us to do what we’re great at, and it feels easy. We’re relying on confidence and competence to deliver impactful work. It’s exhilarating and downright fun. It feels great to bomb down that hill. We get to be our best selves and enjoy the ride, knowing we’re building momentum to carry us as the trail levels out and inevitably begins to ascend again.'
      ],
    bioData:'Patrick is a user experience expert who oversees the work we do at Simple Focus and keeps our team focused on optimizing usability in everything we do. He also makes sure our team is happy and fulfilled, while pushing us to do our best work (which he’s great it, because he used to be a UI designer).'

    },
  ];





 




  // Find the specific blog post based on the id
  const blog = blogData.find((b) => b.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
    <div className='md:w-[80%] w-[90%] mx-auto md:my-24 my-5'>

      <button onClick={()=> Navigate(-1)} className='mb-5 font-bold text-[#D35400] md:hidden tracking-wider text-[18px] flex items-center'>
      <MdKeyboardArrowLeft className='text-[25px] font-bold'/>Blog</button>

      <h1 className='lg:text-6xl lg:text-center lg:leading-tight md:text-4xl text-3xl font-bold mb-10 lg:w-[80%] w-[100%] mx-auto'>{blog.title}</h1>


      <div className='grid lg:grid-cols-2 grid-cols-1 justify-between items-center my-16 py-10 border-t-2 border-b-2 lg:w-[80%] w-[100%] mx-auto'>
          <div className='flex items-center mb-5 gap-4'>
            <img src={blog.personImage} className='md:w-[15%] w-[20%] rounded-full' alt={blog.heading} />

            <div>
            <p className='font-bold text-[18px] text-[#898A91]'>{blog.heading}</p>
            <div className='flex items-center md:gap-3 gap-5 mt-1'>
            <p className='font-bold text-[#3b3b3d]'>{blog.date}</p>
            <p className='font-bold text-[#898A91]'>{blog.time}</p>
            </div>
            </div>
          
          </div>

        <div>
          <p className='font-bold text-[20px] text-[#3b3b3d]'>{blog.content}</p>
        </div>

      </div>

      <img src={blog.image} alt={blog.title} className='w-full md:h-[60vh] object-cover rounded-lg mb-10' />
      <div className='md:w-[80%] mx-auto'>
        {blog.extraContent.map((extracontent,index)=>(
          <div key={index}>
            <p className='my-16 text-[20px] tracking-wide font-medium'>{extracontent}</p>
          </div>
        ))}
      </div>



      

      <div className='flex lg:flex-row flex-col lg:items-center mt-28 md:mb-56 py-10 gap-10 border-t-2 border-b-2 lg:w-[80%] w-[100%] mx-auto'>
          <div>
            <img src={blog.personImage} className='lg:w-[100%] md:w-[30%] w-[50%] rounded-full' alt={blog.heading} />         
          </div>

        <div className=''>
          <h2 className='text-3xl font-bold mb-5'>{blog.heading}</h2>
          <p className='font-bold text-[20px] text-[#3b3b3d] mb-4'>{blog.bioData}</p>
          <a href='https://mail.google.com' rel="noreferrer" target='_blank' className='font-bold text-[18px] my-4 text-[#c58f2c] hover:text-[orange]'>Email</a>
        </div>

      </div>


    </div>
  );
};

export default BlogDetails;
