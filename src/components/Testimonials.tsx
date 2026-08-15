import React from 'react';
import { FaStar, FaQuoteLeft, FaPhone, FaChartLine, FaUsers, FaShieldAlt, FaCheckCircle, FaBuilding, FaGlobe, FaHandshake, FaIndustry, FaHospital, FaGraduationCap, FaShoppingCart, FaBook, FaArrowRight, FaClock, FaUserEdit, FaCheck } from 'react-icons/fa';
import Image from 'next/image';

interface TestimonialProps {
  quote: string;
  author: string;
  title: string;
  company: string;
  industry: string;
  image: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const TestimonialCard = ({ quote, author, title, company, industry, image, metrics }: TestimonialProps) => (
  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
    <div className="flex items-start gap-4">
      <div className="relative">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
          <Image
            src={image}
            alt={author}
            width={48}
            height={48}
            className="object-cover"
          />
      </div>
        <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
          <FaCheck className="text-white text-xs" />
        </div>
      </div>
        <div>
        <p className="text-gray-600 italic mb-4">"{quote}"</p>
        <div className="border-t border-gray-100 pt-4">
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-sm text-gray-500">{company}</p>
          <div className="mt-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {industry}
            </span>
          </div>
        </div>
      </div>
    </div>
    {metrics && metrics.length > 0 && (
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="text-sm font-medium text-gray-900">{metric.value}</p>
              <p className="text-xs text-gray-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    )}
    </div>
  );

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "PVN Voice has transformed our healthcare practice's communication system. The HIPAA compliance features and secure messaging have given us peace of mind while improving our patient care coordination.",
      author: "Dr. David Chen",
      title: "Medical Director",
      company: "HealthCare Plus",
      industry: "Healthcare",
      image: "/images/chen.png",
      metrics: [
        { label: "HIPAA Compliance", value: "100%" },
        { label: "Patient Satisfaction", value: "+45%" },
        { label: "Response Time", value: "-60%" }
      ]
    },
    {
      quote: "As a global enterprise, we needed a solution that could scale with our operations. PVN Voice's international calling features and advanced analytics have been game-changers.",
      author: "Jessica Johnson",
      title: "IT Director",
      company: "GlobalTech Solutions",
      industry: "Technology",
      image: "/images/johnson.png",
      metrics: [
        { label: "Cost Reduction", value: "40%" },
        { label: "Global Coverage", value: "50+ Countries" },
        { label: "Uptime", value: "99.99%" }
      ]
    },
    {
      quote: "The integration with our existing CRM and the advanced call analytics have helped us optimize our sales processes and improve customer engagement significantly.",
      author: "David Wilson",
      title: "Sales Operations Manager",
      company: "SalesPro Systems",
      industry: "Sales",
      image: "/images/wilson.png",
      metrics: [
        { label: "Sales Efficiency", value: "+35%" },
        { label: "Customer Satisfaction", value: "+50%" },
        { label: "Call Quality", value: "98%" }
      ]
    },
    {
      quote: "The security features and compliance tools have made it easy for us to meet regulatory requirements while maintaining excellent communication with our clients.",
      author: "Emily Thompson",
      title: "Compliance Officer",
      company: "Financial Services Inc",
      industry: "Finance",
      image: "/images/thompson.png",
      metrics: [
        { label: "Compliance Rate", value: "100%" },
        { label: "Security Score", value: "A+" },
        { label: "Audit Success", value: "100%" }
      ]
    },
    {
      quote: "The cloud-based solution has eliminated our infrastructure costs while providing better reliability and scalability than our previous on-premise system.",
      author: "James Roberts",
      title: "IT Manager",
      company: "CloudTech Solutions",
      industry: "Technology",
      image: "/images/Roberts.png",
      metrics: [
        { label: "Cost Savings", value: "60%" },
        { label: "System Uptime", value: "99.9%" },
        { label: "Scalability", value: "Unlimited" }
      ]
    },
    {
      quote: "The mobile app and remote work features have been essential for our distributed team. We've seen a significant improvement in team collaboration and productivity.",
      author: "Maria Martinez",
      title: "HR Director",
      company: "RemoteFirst Corp",
      industry: "HR",
      image: "/images/martinez.png",
      metrics: [
        { label: "Team Productivity", value: "+40%" },
        { label: "Remote Access", value: "100%" },
        { label: "Employee Satisfaction", value: "+55%" }
      ]
    },
    {
      quote: "The integration capabilities and API have allowed us to build a custom solution that perfectly fits our unique business needs and workflows.",
      author: "Carlos Garcia",
      title: "Technical Director",
      company: "Innovation Labs",
      industry: "Technology",
      image: "/images/garcia.png",
      metrics: [
        { label: "Integration Success", value: "100%" },
        { label: "Custom Features", value: "20+" },
        { label: "API Reliability", value: "99.99%" }
      ]
    },
    {
      quote: "The customer support and training provided by PVN Voice's team has been exceptional. They've helped us maximize the value of every feature.",
      author: "Brian Reynolds",
      title: "Operations Manager",
      company: "CustomerFirst Services",
      industry: "Customer Service",
      image: "/images/reynolds.png",
      metrics: [
        { label: "Support Response", value: "< 15min" },
        { label: "Feature Adoption", value: "95%" },
        { label: "Training Success", value: "100%" }
      ]
    }
  ];

  const stats = [
    {
      icon: <FaUsers className="text-4xl" />,
      value: "10,000+",
      label: "Active Customers",
      subtext: "Across 50+ countries"
    },
    {
      icon: <FaChartLine className="text-4xl" />,
      value: "70%",
      label: "Average Cost Savings",
      subtext: "Compared to traditional systems"
    },
    {
      icon: <FaShieldAlt className="text-4xl" />,
      value: "99.99%",
      label: "Uptime Guarantee",
      subtext: "With 24/7 monitoring"
    },
    {
      icon: <FaBuilding className="text-4xl" />,
      value: "500+",
      label: "Enterprise Clients",
      subtext: "Including Fortune 500"
    },
    {
      icon: <FaGlobe className="text-4xl" />,
      value: "50+",
      label: "Countries Served",
      subtext: "Global presence"
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      value: "98%",
      label: "Client Retention",
      subtext: "Year over year"
    }
  ];

  const industryStats = [
    {
      icon: <FaIndustry className="text-4xl" />,
      value: "85%",
      label: "Manufacturing",
      subtext: "Improved operational efficiency"
    },
    {
      icon: <FaHospital className="text-4xl" />,
      value: "92%",
      label: "Healthcare",
      subtext: "HIPAA compliance rate"
    },
    {
      icon: <FaGraduationCap className="text-4xl" />,
      value: "78%",
      label: "Education",
      subtext: "Cost reduction in communications"
    },
    {
      icon: <FaShoppingCart className="text-4xl" />,
      value: "65%",
      label: "Retail",
      subtext: "Faster customer response times"
    }
  ];

  const blogPosts = [
    {
      title: "10 Essential VoIP Security Practices for 2024",
      excerpt: "Learn the latest security best practices to protect your VoIP system from emerging threats.",
      readTime: "8 min read",
      category: "Security",
      image: "/images/security.png",
      author: "David Chen",
      authorImage: "/images/chen.png",
      url: "/blog/voip-security-practices"
    },
    {
      title: "Managing Remote Teams with VoIP: Best Practices",
      excerpt: "Discover how to effectively manage remote teams using VoIP technology and collaboration tools.",
      readTime: "6 min read",
      category: "Remote Work",
      image: "/images/remote.png",
      author: "Jessica Johnson",
      authorImage: "/images/johnson.png",
      url: "/blog/remote-work-voip"
    },
    {
      title: "VoIP vs Traditional Phone Systems: Complete Guide",
      excerpt: "A comprehensive comparison of VoIP and traditional phone systems to help you make the right choice.",
      readTime: "10 min read",
      category: "Cost Savings",
      image: "/images/voipvstrad.png",
      author: "Brian Reynolds",
      authorImage: "/images/reynolds.png",
      url: "/blog/voip-cost-savings"
    }
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-600">
            Trusted by <span className="text-secondary-600">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover how forward-thinking companies are revolutionizing their business communications with PVN Voice's cutting-edge solutions. Join thousands of organizations that have transformed their operations and achieved remarkable results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-md text-center transform hover:scale-105 transition-transform duration-300">
              <div className="text-secondary-600 mb-4">{stat.icon}</div>
              <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-gray-500">{stat.subtext}</div>
            </div>
          ))}
        </div>

        {/* Industry Stats + Testimonials Grid in Blue Gradient */}
        <div className="text-center mb-16 bg-gradient-to-r from-primary-600 to-primary-400 rounded-xl py-12 px-4 md:px-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
            Industry-Specific Success Stories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {industryStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="text-secondary-600 mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-600 mb-1">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.subtext}</div>
              </div>
            ))}
          </div>
          {/* Testimonials Grid - white cards for contrast */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 md:p-12">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <FaBook className="text-3xl text-white mr-4" />
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Expert Insights & Resources
                  </h3>
                  <p className="text-primary-100 text-lg">
                    Stay informed with our latest VoIP guides and industry trends
                  </p>
                </div>
              </div>
              <a 
                href="/blog" 
                className="hidden md:flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-medium"
              >
                View All Posts
                <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <a 
                  key={index} 
                  href={post.url}
                  className="group relative bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-40">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                      <span className="ml-3 text-sm text-gray-500 flex items-center">
                        <FaClock className="mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-primary-600 font-medium">
                        Read Article
                        <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-sm font-medium mr-2">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex justify-center mt-8 md:hidden">
              <a 
                href="/blog" 
                className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                View All Posts
                <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-xl p-8 md:p-10 text-center max-w-3xl mx-auto shadow-lg">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Business Communication?
          </h3>
          <p className="text-primary-100 mb-6 text-lg">
            Join industry leaders who trust PVN Voice for their critical communications needs. Experience the future of business communication today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a 
              href="tel:+19045128487" 
              className="bg-secondary-600 hover:bg-secondary-700 text-white px-8 py-4 rounded-lg transition-colors font-medium text-lg flex items-center justify-center space-x-3"
          >
            <FaPhone className="text-white" />
            <span>Call (904) 512-8487</span>
          </a>
            <a 
              href="/contact-us" 
              className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg transition-colors font-medium text-lg"
            >
              Get a Free Demo
            </a>
          </div>
          <p className="mt-4 text-sm text-primary-200">
            Free consultation • No obligation • 30-day trial available
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 